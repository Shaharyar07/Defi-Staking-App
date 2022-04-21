require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url:
        "https://eth-rinkeby.alchemyapi.io/v2/isClvyUI5Hm-AeqPy1yKB4nEQBhWT1gN",
      accounts: [
        "169f5e988e9e80927a55ad358ef2d3a91fb973132ea5bfb052ff1413e6473c48",
      ],
    },
  },
};
