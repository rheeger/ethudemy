const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let campaign;
let factory;
let campaignAddress;
let accounts;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ from: accounts[0], gas: '1000000' });

	await factory.methods.createCampaign('100').send({
		from: accounts[0],
		gas: '1000000'
	});

	[ campaignAddress ] = await factory.methods.getDeployedCampaigns().call();

	campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);
});

describe('Campaigns', () => {
	it('deploys a factory and campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});
});

//     // it('allows an entrant', async () => {
//     //     await campaign.methods.enter().send({
//     //         from: accounts[0],
//     //         value: web3.utils.toWei('.011', 'ether')
//     //     });
//     //     const players = await campaign.methods.getPlayerAdds().call({
//     //         from: accounts[0]
//     //     });

//     //     assert.equal(accounts[0], players[0]);
//     //     assert.equal(1, players.length);
//     // });

//     // it('allows multiple entrants', async () => {
//     //     await campaign.methods.enter().send({
//     //         from: accounts[0],
//     //         value: web3.utils.toWei('.011', 'ether')
//     //     });
//     //     await campaign.methods.enter().send({
//     //         from: accounts[1],
//     //         value: web3.utils.toWei('.011', 'ether')
//     //     });
//     //     await campaign.methods.enter().send({
//     //         from: accounts[2],
//     //         value: web3.utils.toWei('.011', 'ether')
//     //     });
//     //     const players = await campaign.methods.getPlayerAdds().call({
//     //         from: accounts[0]
//     //     });

//     //     assert.equal(accounts[0], players[0]);
//     //     assert.equal(accounts[1], players[1]);
//     //     assert.equal(accounts[2], players[2]);
//     //     assert.equal(3, players.length);
//     // });

//     // it('denies poor entrants', async() => {
//     //     try {
//     //         await campaign.methods.enter().send({
//     //             from: accounts[0],
//     //             value: web3.utils.toWei('.09', 'ether')
//     //         });
//     //         assert(false);
//     //     } catch (err){
//     //         assert(err);
//     //     }
//     // })

//     // it('only lets the manager payout', async() => {
//     //     try {
//     //         await campaign.methods.pickWinner().send({
//     //             from: accounts[1],
//     //         });
//     //         assert(false);
//     //     } catch (err){
//     //         assert(err);
//     //     }
//     // })

//     // it('works end to end and resets', async() => {
//     //     await campaign.methods.enter().send({
//     //         from: accounts[0],
//     //         value: web3.utils.toWei('2', 'ether')
//     //     });

//     //     const initialBalance = await web3.eth.getBalance(accounts[0]);

//     //     await campaign.methods.pickWinner().send({
//     //         from: accounts[0],});

//     //     const finalBalance = await web3.eth.getBalance(accounts[0]);

//     //     const difference = finalBalance - initialBalance;
//     //     console.log(finalBalance - initialBalance);
//     //     assert(difference > web3.utils.toWei('1.8', 'ether'));

//     //     assert(campaign.methods.players.length == 0);

// })

// });
