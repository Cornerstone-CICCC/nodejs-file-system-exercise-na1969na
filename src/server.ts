import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  const directory = "../dist/images";

  if (req.url === "/view-image" && req.method === "GET") {
    const imagePath = path.join(__dirname, directory, "veryhappydog.jpg");

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
