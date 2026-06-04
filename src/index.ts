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

/*
Range       Category            Common Codes 
1xx         Informational       100 Continue, 101 Switching Protocols
2xx         Success             200 OK, 201 Created, 204 No Content
3xx         Redirection         301 Moved Permanently, 302 Found, 304 Not Modified
4xx         Client Error        400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
5xx         Server Error        500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable
*/