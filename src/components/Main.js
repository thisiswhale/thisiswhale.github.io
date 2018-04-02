import React, {Component} from 'react';
const work = [
	{
		title: "Simon Game",
		image: 'https://user-images.githubusercontent.com/16066443/26999981-f8583926-4d5a-11e7-8a9f-c6e6c016b184.PNG',
		description: 'A classic memory game with a series of tones and lights and the player will repeat the pattern sequence',
		demo: 'https://thisiswhale.github.io/Simon/',
		github: 'https://github.com/thisiswhale/Game-of-Life',
		skills: ['HTML','Sass','JavaScript','Animate.css']
	},
	{
		title: "Conway's Game of Life",
		image: 'https://user-images.githubusercontent.com/16066443/26999981-f8583926-4d5a-11e7-8a9f-c6e6c016b184.PNG',
		description: 'Something here',
		demo: 'https://thisiswhale.github.io/Game-of-Life/',
		github: 'https://github.com/thisiswhale/Game-of-Life',
		skills: ['HTML','Sass','Node.js','React.js']
	},
	{
		title: 'Nerf This!',
		image: 'https://user-images.githubusercontent.com/16066443/26999981-f8583926-4d5a-11e7-8a9f-c6e6c016b184.PNG',
		description: 'A team composition suggestor for Overwatch, a popular video game by Blizzard, using user-based data algorithm. Users can login and submit their recent game data through friendly UI into a database. Users can query character choices to obtain suggested strategic team compositions to help user’s winnings.',
 		demo: 'https://dry-journey-45708.herokuapp.com/',
		github: 'https://github.com/thisiswhale/NerfThis',
		skills: ['HTML' , 'Bootstrap' , 'jQuery' , 'mySql' , 'Node.js' , 'Bcrypt.js' , 'Express']
	},
	{
		title: 'Emviews',
		image: 'https://user-images.githubusercontent.com/16066443/27000253-700ba974-4d62-11e7-864a-01564002bd8d.JPG',
		description: 'A one stop shop product search app that aggregates product reviews into a single, trustworthy source display everything you would need to make an informed purchase decision on one browser page. Dynamically list the items, provides descriptio, videos, and reviews posted by recent buyers.',
		demo: 'https://emviews.github.io/EmViews/',
		github: 'https://github.com/EmViews/EmViews',
		skills: ['HTML', 'Bootstrap', 'jQuery', 'Ajax']
	}
];

const skillSet = [
	'HTML',
	'CSS',
	'Sass',
	'JavaScript',
	'React.js',
	'Node.js',
	'mySql',
	'Bootstrap',
	'jQuery'
];

const Header = () => (
	<div className='header fixed-top' id='header'>
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
		  <a className="navbar-brand font-weight-bold">WILLIAM LEUNG</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse font-weight-bold" id="navbarNav">
		    <ul className="nav navbar-nav justify-content-end container">
		      <li className="nav-item">
		        <a className="nav-link" href="#about">Bio</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#skills">Skills</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="#work">Work</a>
		      </li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">Contact</a>
					</li>
		    </ul>
		  </div>
		</nav>
	</div>
);

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='container-fluid'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='text-sm-center'>Bio</h1>
						</div>
						<div className='col-md-8 order-md-2 text-sm-center'>
              <div className='item-wrapper'>
                <img className='img-fluid img-thumbnail mx-auto' src='http://lorempixel.com/g/400/400' alt='picuter'/>
              </div>
            </div>
            <div className='col-md-4 order-md-1  text-sm-center'>
              <h5>Hello.</h5>
              <hr/>
              <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <hr/>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}

const Skills = () => {
	return (
		<div className='skills' id='skills'>
			<div className='container-fluid'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='text-sm-center'>TECHNOLOGY USED</h1>
						</div>
						<div className='col-md-12'>
							<div className="card">
								  <div className="card-body">
										<h5 className="card-title">FRONT-END</h5>
										<p className="card-text">
											<div className='devicon'><i className="devicon-html5-plain colored"></i><span>HTML</span></div>
											<div className='devicon'><i className="devicon-css3-plain colored"></i><span>CSS</span></div>
											<div className='devicon'><i className="devicon-sass-original colored"></i><span>Sass</span></div>
											<div className='devicon'><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
											<div className='devicon'><i className="devicon-bootstrap-plain colored"></i><span>Bootstrap</span></div>
											<div className='devicon'><i className="devicon-jquery-plain colored"></i><span>jQuery</span></div>
											<div className='devicon'><i className="devicon-react-original colored"></i><span>React</span></div>
										</p>
									</div>
									<div className="card-body">
										<h5 className="card-title">BACK-END</h5>
										<p className="card-text">
											<div className='devicon'><i className="devicon-nodejs-plain colored"></i><span>Node.js</span></div>
											<div className='devicon'><i className="devicon-express-original colored"></i><span>Express</span></div>
											<div className='devicon'><i className="devicon-mysql-plain colored"></i><span>MySql</span></div>
											<div className='devicon'><i className='devicon-sequelize-plain colored'></i><span>Sequalize</span></div>
											<div className='devicon'><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
										</p>
									</div>
									<div className="card-body">
										<h5 className="card-title">OTHERS</h5>
										<p className="card-text">
											<div className='devicon'><i className="devicon-atom-original colored"></i><span>Atom</span></div>
											<div className='devicon'><i className="devicon-babel-plain colored"></i><span>Babel</span></div>
											<div className='devicon'><i className="devicon-webpack-plain colored"></i><span>Webpack</span></div>
											<div className='devicon'><i className="devicon-git-plain colored"></i><span>Git</span></div>
											<div className='devicon'><i className="devicon-github-plain colored"></i><span>GitHub</span></div>
											<div className='devicon'><i className="devicon-bitbucket-plain colored"></i><span>Bitbucket</span></div>
											<div className='devicon'><i className="devicon-heroku-plain colored"></i><span>Heroku</span></div>
											<div className='devicon'><i className="devicon-trello-plain colored"></i><span>Trello</span></div>
										</p>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const Work = () => {
	return (<div className='work' id='work'>
		<h1>This is the work section</h1>
	</div>)
}

const Footer = () => {
	return (<div className='contact' id='contact'>
		This is the contact section
	</div>)
}
export default class Main extends Component {

	render() {

		return (<div>
			<Header />
			<About />
			<Skills />
			<Work />
			<Footer />
		</div>);
	}
}
