export default class Logger {
  private static HEADER = {
    alert: "App.Alert:",
    critical: "App.Critical:",
    debug: "App.Debug:",
    emergency: "App.Emergency:",
    error: "App.Error:",
    info: "App.Info:",
    log: "App.Log:",
    notice: "App.Notice:",
    warning: "App.Warning:",
  };

  public static alert(...args:any[]): void {
    console.log(this.HEADER.alert, ...args);
  }

  public static critical(...args:any[]): void {
    console.log(this.HEADER.critical, ...args);
  }

  public static debug(...args:any[]): void {
    console.log(this.HEADER.debug, ...args);
  }

  public static emergency(...args:any[]): void {
    console.log(this.HEADER.emergency, ...args);
  }

  public static error(...args:any[]): void {
    console.log(this.HEADER.error, ...args);
    console.trace(" ");
  }

  public static info(...args:any[]): void {
    console.log(this.HEADER.info, ...args);
  }

  public static log(...args:any[]): void {
    console.log(this.HEADER.log, ...args);
  }

  public static notice(...args:any[]): void {
    console.log(this.HEADER.notice, );
  }

  public static warning(...args:any[]): void {
    console.log(this.HEADER.warning, ...args);
  }
}
