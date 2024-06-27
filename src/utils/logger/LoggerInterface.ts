export default interface LoggerInterface {
  emergency(message:string):void;
  alert(message:string):void;
  critical(message:string):void;
  error(message:string):void;
  warning(message:string):void;
  notice(message:string):void;
  info(message:string):void;
  debug(message:string):void;
  log(message:string):void;
}
