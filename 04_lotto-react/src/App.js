import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lotto from './lotto';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: '',
  };

  async componentDidMount() {
    const manager = await lotto.methods.manager().call();
    const players = await lotto.methods.getPlayerAdds().call();
    const balance = await web3.eth.getBalance(lotto.options.address);
    this.setState({ manager, players, balance })
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await lotto.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' })
  }

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ messsage: 'Picking the lucky fuck...' });
    await lotto.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ messsage: 'Picking the lucky fuck...' });
  }

  render() {
    return (
      <div>
        <h2>LOTTO CONTRACT!</h2>
        <p>This contract is managed by {this.state.manager}. Respect.</p>
        <br></br>
        <p>There are currently {this.state.players.length} people in the current contest.</p>
        <br></br>
        <p>These idiots are playing to win:</p>
        <h2>{web3.utils.fromWei(this.state.balance, 'ether')} ETH</h2>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want into this shit?</h4>
          <div>
            <label>Amount of ether you're putting down:</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })} />
          </div>
          <button>Enter Now!</button>
        </form>
        <hr />
        <h1>{this.state.message}</h1>
        <hr />
        <h4>Ready to pick a winner??</h4>
        <button onClick={this.onClick}>PICK SOMEONE, BITCH!</button>
        <hr />
      </div>
    );
  }
}

export default App;
