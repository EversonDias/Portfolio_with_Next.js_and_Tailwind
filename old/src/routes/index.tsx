import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homePage';
import Projects from '../pages/projects';
import ProjectDetails from '../pages/projects/projectDetails';
import About from '../pages/about';

export default function MyRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/projects'
				element={<Projects />}
			/>
			<Route
				path='/projects/:id'
				element={<ProjectDetails />}
			/>
			<Route
				path='/about'
				element={<About />}
			/>
		</Routes>
	);
}
