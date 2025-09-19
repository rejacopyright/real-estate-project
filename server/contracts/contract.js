const { ethers } = require('ethers');
const contractJson = require('./abi/RealEstate.json');

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');
const signer = new ethers.Wallet(
 '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
 provider
);

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const abi = contractJson.abi;

const contract = new ethers.Contract(contractAddress, abi, signer);

module.exports = contract;
