const http = require("http");
const Controller = require("./controller");
const { getReqData } = require("./utils");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const data = await getReqData(req);

  const url = req.url;
  let result;
  let status;
  switch (url) {
    case "/api/generate":
    const keys = new Controller().generateKey();
      result = { ...keys};
      status = 200;
      break;
    case "/api/sign":
      const { message, privateKey } = data;
      const signature = new Controller().sign(message, privateKey);
      result = { signature };
      status = 200;
      break;
    case "/api/verify":
      const {
        message: inputMessage,
        signature: inputSignature,
        publicKey,
      } = data;
      const isVerified = new Controller().verify(
        inputMessage,
        inputSignature,
        publicKey
      );
      result = isVerified;
      status = 200;
      break;
    case "/api/transaction":
      const { hash } = data;
      const response = await new Controller().getERC20TransferByHash(hash);
      result = response;
      status = 200;
      break;
    default:
      status = 404;
      result = { message: "Not found" };
  }

  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
