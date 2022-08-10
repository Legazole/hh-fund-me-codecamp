const { network } = require("hardhat");
const {
    localDevelopmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    if (localDevelopmentChains.includes(network.name)) {
        log("local network detected, deploying mocks");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            log: true,
            from: deployer,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        log("Mocks deployed!");
    } else {
        log("No mocks deployed!");
    }
    log("-----------------------------");
};

module.exports.tags = ["all", "mocks"];
