require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const privateKey0 = process.env.PRIVATE_KEY;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
//const privateKey1 = process.env.PRIVATE_KEY;
//const privateKey2 = process.env.PRIVATE_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [privateKey0 /*privateKey1, privateKey2*/],
            chainId: 4,
            blockConfirmations: 6,
        },
        localhost: { url: "http://127.0.0.1:8545/", chainId: 31337 },
    },
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        token: "Matic",
    },
    etherscan: { apiKey: ETHERSCAN_API_KEY },
};
