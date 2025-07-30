import winston from "winston"

//format console.log
const consoleFormat=winston.format.printf(({level,message})=>{
    const logLevel=winston.format.colorize().colorize(level, `${level.toUpperCase()}`)
    return `[${logLevel}]:${message}`
})

//logger
let logger=winston.createLogger({
    transports:[
        new winston.transports.Console({
            level:process.env.LOG_LEVEL,
            handleExceptions:true,
            format: winston.format.combine(winston.format.timestamp(), consoleFormat)
        })
    ]
})

//print any unknown error
logger.on("error",error=>{
    console.log("Unknown error in winston log");
    console.log(error.message);
})
export default logger;
