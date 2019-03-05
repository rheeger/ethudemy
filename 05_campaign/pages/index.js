import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
	static async getInitialProps() {
		const campaign = await factory.methods.getDeployedCampaigns().call();

		return { campaign };
	}

	render() {
		return <div>{this.props.campaign[0]}</div>;
	}
}

export default CampaignIndex;
