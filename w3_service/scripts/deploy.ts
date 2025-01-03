const {hre, ethers} = require("hardhat");


async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://linea-sepolia.blockpi.network/v1/rpc/public');
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  const balance = await wallet.getBalance();
  console.log(`Account balance: ${ethers.utils.formatEther(balance)} ETH`);
  // Compile and deploy the contract

  const QuestToken = await ethers.getContractFactory("Evion");
  const myCustomToken = await QuestToken.deploy();
  await myCustomToken.deployed();

  console.log(
    "MyCustomToken deployed to:===========",
    "myCustomToken",
    myCustomToken.address
  );



  // // Replace with the address to which you want to mint tokens and the amount
  // const recipientAddress = "0xB702203B9FD0ee85aeDB9d314C075D480d716635";
  // const mintAmount = ethers.utils.parseUnits("1000", 18); // Mint 90 tokens

  // // Mint new tokens
  // const tx = await myCustomToken.mint(recipientAddress, mintAmount);
  // await tx.wait();

  // console.log(`Minted ${mintAmount.toString()} tokens to ${recipientAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
