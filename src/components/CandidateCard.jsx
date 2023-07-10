import React from 'react';
import '../css/CandidateCard.css';

const CandidateCard = ({ city, country, email, name, phone, picture }) => {
	return (
		<>
			<article>
				<img alt={`Foto de ${name}`} src={picture} />
				<div className='details'>
					<h3>{name}</h3>
					<p>
						Ubicación: {city} ({country})
					</p>
					<button>{phone}</button>
					<button>{email}</button>
				</div>
			</article>
		</>
	);
};

export default CandidateCard;
