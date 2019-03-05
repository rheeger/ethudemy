import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Container } from 'semantic-ui-react';
import Layout from '../components/layout';

class CampaignIndex extends Component {
	static async getInitialProps() {
		const campaign = await factory.methods.getDeployedCampaigns().call();

		return { campaign };
	}

	renderCampaigns() {
		const items = this.props.campaign.map((address) => {
			return {
				header: address,
				description: <a>View Campaign</a>,
				fluid: true
			};
		});
		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<Container>
					<h3>Open Campaigns</h3>
					<Button floated="right" content="Create Campaign" icon="add circle" primary />
					{this.renderCampaigns()}
				</Container>
			</Layout>
		);
	}
}

export default CampaignIndex;
