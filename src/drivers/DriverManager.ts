export class Driver {
    name: string;

    constructor(obj: any) {
        if(!obj.name) {
            throw Error("prop 'name' is missing");
        }
        this.name = obj.name;
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
}

export const driverManager = new DriverManager();