const INFURA_ID = '*******';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

module.exports = {provider};
