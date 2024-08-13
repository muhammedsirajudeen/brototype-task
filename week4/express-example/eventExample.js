const events = require("events")

let eventEmitter=new events.EventEmitter()


function screamHandler(){
    console.log("abdukka crying for roshan")
}

eventEmitter.on("scream",screamHandler)

eventEmitter.emit("scream")

