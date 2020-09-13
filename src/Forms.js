import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

class Forms extends Component {
	initialState = {
		name: '',
		job: ''
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	state = this.initialState;

	render() {
		const { name, job } = this.state;

		return (
			<Container>
				<Form>
					<Form.Group className='form-input'>
						<Form.Input
							focus
							placeholder='Name'
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={this.handleChange}
						/>

						<Form.Input
							focus
							placeholder='Job'
							type='text'
							name='job'
							id='job'
							value={job}
							onChange={this.handleChange}
						/>

						<Button
							basic
							color='teal'
							type='button'
							value='Submit'
							content='Submit'
							onClick={this.submitForm}
						/>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}

export default Forms;
