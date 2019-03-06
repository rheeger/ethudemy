import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const address = '0xD6a7f579122a2AdDa3351358F6DF3A698fE78D17';
const instnace = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), address);

export default instnace;
