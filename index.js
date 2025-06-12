#!/usr/bin/env node
import dotenv from "dotenv";
dotenv.config();
import { execSync } from "child_process";
import fs from "fs-extra";
import ora from "ora";
import path from "path";
import os from "os";

const inputName = process.argv[2];
const projectPath = inputName
    ? path.resolve(process.cwd(), inputName)
    : process.cwd();

const monoRepoTemplate = "https://github.com/Tamoziit/express-mongo-vite-ts-monorepo.git";
const tempPath = path.join(os.tmpdir(), `temp-monorepo-${Date.now()}`);

console.log("🚀 Creating Project...\n");

const spinner = ora("🛠 Initializing Project...\n").start();

try {
    // 1. Cloning to temp folder silently
    execSync(`git clone ${monoRepoTemplate} "${tempPath}"`, { stdio: "pipe" });

    // 2. Ensuring target directory exists
    fs.ensureDirSync(projectPath);

    // 3. Copying everything (except .git & LICENSE) to target directory
    fs.copySync(tempPath, projectPath, {
        filter: (src) => {
            const basename = path.basename(src);
            return !src.includes(".git") && basename !== "LICENSE";
        },
    });

    // 4. Cleanup
    fs.removeSync(tempPath);

    spinner.succeed("✅ Project setup complete!");

    console.log("\n🎉 Next steps:");
    if (inputName) console.log(`cd ${inputName}`);
    console.log("cd backend");
    console.log("npm install");
    console.log("cd ../frontend");
    console.log("npm install");
    console.log("\n🚀 To start development:");
    console.log("Initialize .env & execute cd backend");
    console.log("npm run dev");
    console.log("Initialize .env & cd frontend");
    console.log("npm run dev");
} catch (err) {
    spinner.fail("❌ Failed to set up project");
    console.error(err.message || err);
    process.exit(1);
}
