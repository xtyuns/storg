import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { calls } from "./calls";
import { driverManager } from "./drivers/DriverManager";

calls.loadCustomizedDrivers().then(ds => {
  Object.keys(ds).forEach(k => driverManager.registerDriver(ds[k], true));
  for(const n of driverManager.driverNames()) {
    console.log(driverManager.getDriver(n).sayHello());
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
