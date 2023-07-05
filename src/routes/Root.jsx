import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<>
			<header>
				<nav>
					<ul class="navbar">
						<li>
							<Link to="/create">Escribir un post</Link>
						</li>
						<li>
							<Link to="/posts">Ver todos los posts</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Root;
