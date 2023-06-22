import { fs } from "@tauri-apps/api";
import { Driver } from "./drivers/DriverManager";

async function loadCustomizedDrivers() {
    const customizedDrivers: { [name: string]: Driver } = {};
    const dirName = 'drivers';
    const dirPath = fs.BaseDirectory.AppData;
    if (!await fs.exists(dirName, { dir: dirPath })) {
        fs.createDir(dirName, { dir: dirPath, recursive: true });
    }

    const fns = await fs.readDir(dirName, { dir: dirPath });
    for (const fn of fns) {
        if (fn.children) {
            continue;
        }

        try {
            const content = await fs.readTextFile(fn.path);
            const obj = eval?.(`(${content})`); // todo cannot eval obj
            const driver = new Driver(obj); // todo: cannnot construct Driver instance
            customizedDrivers[driver.name] = driver;
        } catch (e) {
            console.error(e);
        }
    }

    return customizedDrivers;
}

export const calls = {
    loadCustomizedDrivers,
}
