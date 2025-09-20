const { ethers } = require('ethers');
const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');
const contract = require('../contracts/contract');

exports.helath = asyncErrorHandler(async (_req, res) => {
 return res.status(200).json({ success: true, message: 'Work' });
});

// ====================================== GET BALANCE ======================================
exports.getBalance = asyncErrorHandler(async (_req, res) => {
 try {
  const balance = await contract.getBalance();
  const balanceInEth = ethers.formatEther(balance);
  res.status(200).json({ balance: balanceInEth, unit: 'ETH' });
 } catch (error) {
  res.status(500).json({ error: error?.message });
 }
});

// ====================================== BUY ITEM ======================================
exports.buyItem = asyncErrorHandler(async (_req, res) => {
 try {
  const price = ethers.parseEther('0.05');
  const provider = new ethers.JsonRpcProvider('http://localhost:8545');
  const BUYER_PRIVATE_KEY =
   '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';
  const BUYER_WALLET = new ethers.Wallet(BUYER_PRIVATE_KEY, provider);
  const tx = await contract
   .connect(BUYER_WALLET)
   .buyItem(price, { value: price });
  const data = await tx.wait();
  res.status(200).json({ data, message: 'Item bought successfully' });
 } catch (error) {
  res.status(500).json({ error: error?.message });
 }
});
