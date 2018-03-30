import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'
// const work = [{},
//
// ];

const Header = () => (
	<Menu inverted stackable size='massive' color='gray'>
		<Menu.Item header="header" active >William Leung</Menu.Item>
		<Menu.Menu position='right'>
			<Menu.Item link name='About Me' />
			<Menu.Item link name='Skills' />
			<Menu.Item link name='Work' />
		 	<Menu.Item link name='Contact Me' />
		</Menu.Menu>
	</Menu>
);

const About = () => {
	return(
		<div>
			This is the About section
		</div>
	)
}
export default class Main extends Component {

	render() {

		return (
			<div>
				<Header/>
			</div>
		);
	}
}
