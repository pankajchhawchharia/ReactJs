import log from "loglevel";

log.setLevel(process.env.NODE_ENV === 'production'? 'Warn' : 'Info');
log.info("Logger Initialized");

export default log;
