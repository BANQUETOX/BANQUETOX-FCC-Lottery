const { ethers } = require("hardhat")

const networkConfig = {
    8001: {
        name: "mumbai",
        vrfCoordinatorV2: "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x83250c5584ffa93feb6ee082981c5ebe484c865196750b39835ad4f13780435d",
        subscriptionId: "0",
        callbackGasLimit: "5000000",
        interval: "30",
    },

    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x83250c5584ffa93feb6ee082981c5ebe484c865196750b39835ad4f13780435d",
        callbackGasLimit: "5000000",
        interval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
