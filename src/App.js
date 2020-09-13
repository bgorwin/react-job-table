import React from 'react';
import { Divider } from 'semantic-ui-react';

import Table from './Tables';
import Forms from './Forms';

class App extends React.Component {
	state = {
		characters: []
	};

	removeCharacter = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
	};

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] });
	};

	render() {
		const { characters } = this.state;
		return (
			<div>
				<Table
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<Divider />
				<Forms handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
