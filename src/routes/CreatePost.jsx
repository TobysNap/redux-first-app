import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, incrementPoints, modifyArray, newItem, saveNombre } from '../store/slices';

const One = () => {
	const dispatch = useDispatch();
	const initialName = useSelector((state) => state.users.nombre);
	const initialEdad = useSelector((state) => state.users.edad);
	const initialPoints = useSelector((state) => state.points.points);

	const modificar = () => {
		dispatch(saveNombre('Nuevo Nombre'));
	};

	const incrementar = () => {
		dispatch(incrementPoints());
	};

	const modificarArray = () => {
		dispatch(
			modifyArray({
				index: 0,
				newName: 'React',
				newLearned: 2023,
			})
		);
	};

	const pushItem = () => {
		dispatch(
			newItem({
				newName: 'Redux',
				newLearned: 2023,
			})
		);
  };
  
	const popItem = () => {
		dispatch(deleteItem('Redux'));
	};

	return (
		<>
			<h1>Bienvenido, {initialName}!</h1>
			<p>Tu edad es de {initialEdad} años</p>
			<h2>Tu puntuación es de: {initialPoints} puntos!</h2>
			<button onClick={incrementar}>Subir puntos</button>
			<button onClick={modificar}>Cambiar Nombre</button>
			<button onClick={modificarArray}>Modificar Array</button>
			<button onClick={pushItem}>Push item al Array</button>
			<button onClick={popItem}>Pop item al Array</button>
		</>
	);
};

export default One;
