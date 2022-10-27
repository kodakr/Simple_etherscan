const {ERC20_ABI} = require("./Abi");
const {ethers} = require("ethers");
const {provider} = require("./provider");


async function fetch(ca) {
    const contract = new ethers.Contract(ca,ERC20_ABI, provider);
    const totalSupply = await contract.totalSupply();
    console.log(totalSupply.toString());
}

//fetch("");
