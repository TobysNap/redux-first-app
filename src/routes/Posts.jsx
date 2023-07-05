import React from 'react';
import { useSelector } from 'react-redux';

const Two = () => {
	const initialName = useSelector((state) => state.users.nombre);
	const initialSkills = useSelector((state) => state.users.skills);

	return (
		<>
			<h1>Bienvenido {initialName}!</h1>
      {initialSkills.map(s => <h2> {s.name} - {s.learned} </h2>)}
		</>
	);
};

export default Two;
