export class Driver {
    name!: string;
    sayHello!: () => string;
    [k: string]: any;

    constructor(obj: any) {
        const checkProperties: { [k: string]: any } = { name: 'string', sayHello: 'function' };
        Object.keys(checkProperties).forEach(k => {
            if (typeof obj[k] !== checkProperties[k]) {
                throw new Error(`Property '${k}' is missing or has an incorrect type.`);
            }
            this[k] = obj[k];
        });
    }
}

class DriverManager {
    private driver: { core: { [driverName: string]: Driver }, customized: { [driverName: string]: Driver } } = {
        core: {},
        customized: {}
    };

    registerDriver(driver: Driver, force: boolean) {
        if (!(driver?.name) || (this.driver.customized[driver.name] && !force)) {
            return false;
        }
        this.driver.customized[driver.name] = driver;
        return true;
    }

    getDriver(driverName: string): Driver {
        return this.driver.core[driverName] || this.driver.customized[driverName];
    }

    driverNames(): string[] {
        return [...new Set([...Object.keys(this.driver.core), ...Object.keys(this.driver.customized)])];
    }
}

export const driverManager = new DriverManager();