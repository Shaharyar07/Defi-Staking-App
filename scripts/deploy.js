const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Tether = await hre.ethers.getContractFactory("Tether");
  const RWD = await hre.ethers.getContractFactory("RWD");
  const DecentralBank = await hre.ethers.getContractFactory("DecentralBank");

  const tether = await Tether.deploy();
  const rwd = await RWD.deploy();
  const decentralBank = await DecentralBank.deploy(rwd.address, tether.address);

  const tetherToken = await tether.deployed();
  const rewardToken = await rwd.deployed();
  await decentralBank.deployed();

  //transfer all reward token to decentrallized bank
  await rewardToken.tranfer(decentralBank.address, "1000000000000000000000000");
  //Send 100 tokens to the invester
  await tetherToken.transfer(
    "0x35d8AeD191cf3ba760Fd242ABFCC8c86B2d5FB73",
    "1000000000000000000"
  );
  //check the address of deployed contracts
  console.log("Tether deployed to:", tether.address);
  console.log("RWD deployed to:", rwd.address);
  console.log("DecentralBank deployed to:", decentralBank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
