const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");
const { before } = require("mocha");

describe("DecentralBank", async([owner, customer]) => {
  let tether, rwd, bank;
  before(async () => {
    const Tether = await ethers.getContractFactory("Tether");
    const tether = await Tether.deploy();
    await tether.deployed();
    const DecentralBank = await ethers.getContractFactory("DecentralBank");
    const bank = await DecentralBank.deploy();
    await bank.deployed();
    const RWD = await ethers.getContractFactory("RWD");
    const rwd = await RWD.deploy();
    await rwd.deployed();
    rwd.transfer(bank.address, ethers.utils.parseEther("1000000"));
    tether.transfer(customer, ethers.utils.parseEther("1000000"), {
      from: owner,
    });
  });

  describe("Tether Token Deployment", () => {
    it("Matches name tether successfully", async () => {
      let name = await tether.name();
      expect(name).to.equal("Mock Tether Token");
    });
  });

  describe("RWD Token Deployment", () => {
    it("Matches name rwd successfully", async () => {
      let name = await rwd.name();
      expect(name).to.equal("Mock RWD Token");
    });
  });

  describe("Decentral Bank Deployment", () => {
    it("Matches name bank successfully", async () => {
      let name = await bank.name();
      expect(name).to.equal("Mock Tether Token");
    });
    it("Has tokens in Bank", async () => {
      let balance = await rwd.balanceOf(bank.address);
      expect(balance).to.equal(ethers.utils.parseEther("1000000"));
    });
  });
});
