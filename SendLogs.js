import Log from './logger.js';

function sendToServer(level,message) {
  fetch("API_LINK",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({level,message,timestamp: new Date()}),
  })
  .catch((error) => console.log("Fail to send log", error));
}
