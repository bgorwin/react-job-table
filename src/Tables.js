import React from 'react';
import { Container, Table, Button } from 'semantic-ui-react';

const TableHeader = () => {
	return (
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell>Name</Table.HeaderCell>
				<Table.HeaderCell>Job</Table.HeaderCell>
			</Table.Row>
		</Table.Header>
	);
};

const TableBody = (props) => {
	const rows = props.characterData.map((row, index) => {
		return (
			<Table.Row key={index}>
				<Table.Cell>{row.name}</Table.Cell>
				<Table.Cell>{row.job}</Table.Cell>
				<Button basic color='red' onClick={() => props.removeCharacter(index)}>
					Delete
				</Button>
			</Table.Row>
		);
	});

	return <tbody>{rows}</tbody>;
};

const Tables = (props) => {
	const { characterData, removeCharacter } = props;

	return (
		<Container>
			<Table>
				<TableHeader />
				<TableBody
					characterData={characterData}
					removeCharacter={removeCharacter}
				/>
			</Table>
		</Container>
	);
};

export default Tables;
