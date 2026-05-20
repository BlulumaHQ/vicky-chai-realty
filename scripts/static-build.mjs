#!/usr/bin/env node
import { existsSync, copyFileSync, renameSync, rmSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const dist = resolve(root, "dist");
const distClient = join(dist, "client");
const distServer = join(dist, "server");

if (!existsSync(distClient) || !existsSync(distServer)) {
  console.error("Expected dist/client and dist/server after vite build");
  process.exit(1);
}

// Alias server entry
const serverIndex = join(distServer, "index.js");
const serverServer = join(distServer, "server.js");
if (existsSync(serverIndex) && !existsSync(serverServer)) {
  copyFileSync(serverIndex, serverServer);
  console.log("Aliased dist/server/index.js → dist/server/server.js");
}

const PORT = 4910;
const child = spawn("npx", ["vite", "preview", "--port", String(PORT)], {
  stdio: ["ignore", "inherit", "inherit"],
  env: process.env,
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function pollReady() {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`http://localhost:${PORT}/`);
      if (res.status === 200) return res;
    } catch {}
    await wait(500);
  }
  throw new Error("Preview server did not become ready in 30s");
}

async function killChild() {
  try { child.kill("SIGTERM"); } catch {}
  await wait(500);
  try { child.kill("SIGKILL"); } catch {}
}

try {
  const res = await pollReady();
  const html = await res.text();
  const { writeFileSync } = await import("node:fs");
  writeFileSync(join(distClient, "index.html"), html);
  console.log("Wrote dist/client/index.html");
} catch (err) {
  await killChild();
  console.error(err);
  process.exit(1);
}

await killChild();

// Flatten dist/client/* → dist/
function moveAll(srcDir, destDir) {
  for (const name of readdirSync(srcDir)) {
    const s = join(srcDir, name);
    const d = join(destDir, name);
    if (existsSync(d)) rmSync(d, { recursive: true, force: true });
    renameSync(s, d);
  }
}
moveAll(distClient, dist);
rmSync(distClient, { recursive: true, force: true });
rmSync(distServer, { recursive: true, force: true });

// Ensure _redirects
const redirectsDst = join(dist, "_redirects");
if (!existsSync(redirectsDst)) {
  const src = resolve(root, "public/_redirects");
  if (existsSync(src)) copyFileSync(src, redirectsDst);
}

function countFiles(dir) {
  let n = 0;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    n += statSync(p).isDirectory() ? countFiles(p) : 1;
  }
  return n;
}
console.log(`Static build complete. ${countFiles(dist)} files in dist/`);
