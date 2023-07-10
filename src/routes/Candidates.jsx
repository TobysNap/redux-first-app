import React, { useEffect, useState } from 'react';
import CandidateCard from '../components/CandidateCard';

const Candidates = () => {
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=6')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Error HTTP: ${response.status}`);
				}

				return response.json();
			})
			.then((datos) => setCandidates(datos.results))
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<h1>Candidatos</h1>
			{candidates.map((candidate, index) => (
				<CandidateCard
					city={candidate.location.city}
					country={candidate.location.country}
					email={candidate.email}
					name={`${candidate.name.title} ${candidate.name.first} ${candidate.name.last}`}
					phone={candidate.phone}
					picture={candidate.picture.medium}
					key={index}
				/>
			))}
		</>
	);
};

export default Candidates;
