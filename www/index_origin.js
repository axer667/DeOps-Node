const http = require("http");
const fs = require("fs");
//import http from 'http';
//import fs from 'fs';
http.createServer(function (request, response) {
    if (request.url === "/user") {
        let data = "";
        request.on("data", chunk => {
            data += chunk;
        });
        request.on("end", () => {
            console.log(data);
            response.end("done: " + data);
        });
    } else {
        fs.readFile("index.html", "utf8", function (error, data) {
            let message = "Изучаем Node.js";
            let header = "Главная страница";
            data = data.replace("{header}", header).replace("{message}", message);
            response.end(data);
        })
    }
}).listen(3000);
