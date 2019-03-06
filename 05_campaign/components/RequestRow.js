import React, { Component } from 'react';
import { Message, Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import Router from 'next/router';

class RequestRow extends Component {
	state = {
		approveloading: false,
		finalizeloading: false,
		errorMessage: ''
	};

	onApprove = async (event) => {
		event.preventDefault();

		const campaign = Campaign(this.props.address);

		this.setState({ approveloading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.approveRequest(this.props.id).send({
				from: accounts[0]
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ approveloading: false, errorMessage: '' });

		Router.replace(`/campaigns/${this.props.address}/requests`);
	};

	onFinalize = async (event) => {
		event.preventDefault();

		const campaign = Campaign(this.props.address);

		this.setState({ finalizeloading: true, errorMessage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.finalizeRequest(this.props.id).send({
				from: accounts[0]
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ finalizeloading: false, errorMessage: '' });
		Router.replace(`/campaigns/${this.props.address}/requests`);
	};

	render() {
		const { id, request, approversCount } = this.props;
		const readytoFinalize = request.approvalCount > approversCount / 2;
		return (
			<Table.Row positive={readytoFinalize && !request.complete} disabled={request.complete}>
				<Table.Cell>{id}</Table.Cell>
				<Table.Cell>{request.description}</Table.Cell>
				<Table.Cell>{web3.utils.fromWei(request.value, 'ether')}</Table.Cell>
				<Table.Cell>{request.recipient}</Table.Cell>
				<Table.Cell>
					{request.approvalCount}/{approversCount}
				</Table.Cell>
				<Table.Cell>
					{request.complete ? null : (
						<Button
							onClick={this.onApprove}
							disabled={readytoFinalize}
							color="green"
							basic
							loading={this.state.approveloading}
						>
							Approve
						</Button>
					)}
				</Table.Cell>
				<Table.Cell>
					{request.complete ? null : (
						<Button onClick={this.onFinalize} color="red" basic loading={this.state.finalizeloading}>
							Finalize
						</Button>
					)}
				</Table.Cell>
			</Table.Row>
		);
	}
}

export default RequestRow;
