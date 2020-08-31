// Packages
import React from 'react';

// Component
import Banner from './shared/Banner';

// Style
import style from './style.module.css';

export default function Home () {

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<>
			<Banner />

			<div className="container">
				<h3 className={"title " + style.about}>About</h3>
			</div>

			<div className="background-dark py-5">
				<div className="container">
					<p>Developed by Rafael Correa Chaves and Guilherme Vitorino as a way to easily implement and detect graphical patterns in new projects, candlelit is a easy solution for any programmer. If you wish to contribute any patterns we miss, you can write an email to: rafael.correa@aposoftworks.com or a new issue to our github with the title: [NP] {'<name of your pattern>'}. We hope you like it and enjoy using it.</p>
				</div>
			</div>
		</>
	);
}
