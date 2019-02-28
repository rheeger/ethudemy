const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile');

//TO BE REFACTORED ON COMPLETED CONTRACT


let lotto;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lotto = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });
})


describe('Lotto contract', () => {
    it('deploys', () => {
        assert.ok(lotto.options.address);
    });

    // it('allows an entrant', async () => {
    //     await lotto.methods.enter().send({
    //         from: accounts[0],
    //         value: web3.utils.toWei('.011', 'ether')
    //     });
    //     const players = await lotto.methods.getPlayerAdds().call({
    //         from: accounts[0]
    //     });

    //     assert.equal(accounts[0], players[0]);
    //     assert.equal(1, players.length);
    // });

    // it('allows multiple entrants', async () => {
    //     await lotto.methods.enter().send({
    //         from: accounts[0],
    //         value: web3.utils.toWei('.011', 'ether')
    //     });
    //     await lotto.methods.enter().send({
    //         from: accounts[1],
    //         value: web3.utils.toWei('.011', 'ether')
    //     });
    //     await lotto.methods.enter().send({
    //         from: accounts[2],
    //         value: web3.utils.toWei('.011', 'ether')
    //     });
    //     const players = await lotto.methods.getPlayerAdds().call({
    //         from: accounts[0]
    //     });

    //     assert.equal(accounts[0], players[0]);
    //     assert.equal(accounts[1], players[1]);
    //     assert.equal(accounts[2], players[2]);
    //     assert.equal(3, players.length);
    // });

    // it('denies poor entrants', async() => {
    //     try {
    //         await lotto.methods.enter().send({
    //             from: accounts[0],
    //             value: web3.utils.toWei('.09', 'ether')
    //         });
    //         assert(false);
    //     } catch (err){
    //         assert(err);
    //     }
    // })

    // it('only lets the manager payout', async() => {
    //     try {
    //         await lotto.methods.pickWinner().send({
    //             from: accounts[1],
    //         });
    //         assert(false);
    //     } catch (err){
    //         assert(err);
    //     }
    // })

    // it('works end to end and resets', async() => {
    //     await lotto.methods.enter().send({
    //         from: accounts[0],
    //         value: web3.utils.toWei('2', 'ether')
    //     });

    //     const initialBalance = await web3.eth.getBalance(accounts[0]);

    //     await lotto.methods.pickWinner().send({
    //         from: accounts[0],});

    //     const finalBalance = await web3.eth.getBalance(accounts[0]);

    //     const difference = finalBalance - initialBalance;
    //     console.log(finalBalance - initialBalance);
    //     assert(difference > web3.utils.toWei('1.8', 'ether'));

    //     assert(lotto.methods.players.length == 0);


})

});
