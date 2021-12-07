const converter = require("hex2dec");
const Eth = require("web3-eth");
const crypto = require("crypto");
const eth = new Eth(
  "https://mainnet.infura.io/v3/bc3f047860f24673806a09d0df8b6b81"
);

class Controller {
  generateKey() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      namedCurve: "secp256k1",
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });
    return {
      publicKey: publicKey.toString("base64"),
      privateKey: privateKey.toString("base64"),
    };
  }
  sign(message, privateKey) {
    const data = Buffer.from(message);
    const privateKeyObj = crypto.createPrivateKey({
      key: privateKey,
      format: "pem",
      type: "pkcs1",
    });
    const signature = crypto.sign("SHA256", data, {
      key: privateKeyObj,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    });
    return signature.toString('base64');
  }
  verify(message, signature, publicKey) {
    const publicKeyObj = crypto.createPublicKey({
      key: publicKey,
      format: "pem",
      type: "pkcs1",
    });
    const bufferSignature = Buffer.from(signature, "base64");
    const isVerified = crypto.verify(
      "SHA256",
      Buffer.from(message),
      {
        key: publicKeyObj,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      },
      bufferSignature
    );
    return isVerified;
  }
  async getERC20TransferByHash(hash) {
    const transactionReceipt = await eth.getTransactionReceipt(hash);
    const transaction = await eth.getTransaction(hash);
    if (!transactionReceipt || !transaction) throw "NOT FOUND";
    const { from, to, blockNumber, contractAddress, logs, transactionHash } =
      transactionReceipt;
    const { input } = transaction;
    const receiver = `0x${input.slice(34, 74)}`;
    const amount = converter.hexToDec(input.slice(74));
    const transfers = [{ from, to: receiver, amount }];

    return {
      transfers,
      hash: transactionHash,
      blockHeight: blockNumber,
      contractAddress: to,
    };
  }
}
module.exports = Controller;
