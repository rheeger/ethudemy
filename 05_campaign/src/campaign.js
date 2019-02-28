import web3 from './web3'

const address = //INSERT ADDRESS

const abi = //INSERT ABI

export default new web3.eth.Contract(abi, address);

