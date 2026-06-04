import http, { IncomingMessage, ServerResponse } from "node:http";
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
        "Content-Type": "text/html", //MIME type
        "X-My-Custom-Header": "ABCDEF"
    });
    res.end("hello from node.js");
});
server.listen(3000, () => {
    console.log("Server Running");
});