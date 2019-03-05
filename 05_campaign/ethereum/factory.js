import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const address = '0xB76B8eC573284E9A9A47C55b400d87E500B614C2';
const instnace = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), address);

export default instnace;
