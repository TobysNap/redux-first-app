import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/create">Escribir un post</Link>
						</li>
						<li>
							<Link to="/candidates">Ver usuarios</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Root;
