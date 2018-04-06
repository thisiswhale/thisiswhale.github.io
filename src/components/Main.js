import React, {Component} from 'react';

const work = [

	{
		id:'proj-game-of-life',
		title: "Conway's Game of Life",
		image: 'https://user-images.githubusercontent.com/16066443/38351505-9dae1f54-3864-11e8-8e42-a4f4a1ab7390.gif',
		alt:'game of life image',
		description: 'Personal. A cellular automation where users can create and observe the life cycle interactions between cells.',
		demo: 'https://thisiswhale.github.io/Game-of-Life/',
		github: 'https://github.com/thisiswhale/Game-of-Life',
		skills: ['HTML','Sass','Node.js','React.js']
	},
	{
		id:'proj-simon-game',
		title: "Simon Game",
		image: 'https://user-images.githubusercontent.com/16066443/38351167-39d2069a-3863-11e8-837f-ec880389e8c7.JPG',
		alt:'simon game image',
		description: 'Personal. Players follow a series of repeating pattern of tones and light based on a classic, retro memory game in the 1980s.',
		demo: 'https://thisiswhale.github.io/Simon/',
		github: 'https://github.com/thisiswhale/Game-of-Life',
		skills: ['HTML','Sass','JavaScript']
	},
	{
		id:'proj-recipe-box',
		title: "Recipe Box",
		image: 'https://user-images.githubusercontent.com/16066443/37027268-b78b327c-20e5-11e8-8b70-654c056624fd.gif',
		alt:'recipe image',
		description: 'Personal. Recipes able to save into your LocalStorage.',
		demo: 'https://thisiswhale.github.io/Recipe-Box/',
		github: 'https://github.com/thisiswhale/Recipe-Box',
		skills: ['HTML','Sass','Bootstrap','Node.js','React.js']
	},
	{
		id:'proj-markdown-previewer',
		title: "Markdown Previewer",
		image: 'https://user-images.githubusercontent.com/16066443/36639573-32a8ae04-19c4-11e8-926b-4bbd83f53dc3.JPG',
		alt:'markdown image',
		description: 'Personal. Real-time lightweight markup language converter for your needs.',
		demo: 'https://thisiswhale.github.io/Markdown-Previewer/',
		github: 'https://github.com/thisiswhale/Markdown-Previewer',
		skills: ['HTML','Sass','Bootstrap','React.js']
	},
	{
		id:'proj-tic-tac-toe',
		title: "Tic Tac Toe",
		alt:'tictactoe',
		image: 'https://user-images.githubusercontent.com/16066443/36402185-64a66568-1591-11e8-9f20-92698b3f88b2.gif',
		description: 'Personal. Play against the ruthless AI with your favorite memes.',
		demo: 'https://thisiswhale.github.io/Tic-Tac-Toe/',
		github: 'https://github.com/thisiswhale/Tic-Tac-Toe',
		skills: ['HTML','Sass','JavaScript']
	},
	{
		id:'proj-nerf-this',
		title: 'Nerf This!',
		alt:'nerf this image',
		image: 'https://user-images.githubusercontent.com/16066443/38351027-b5fadb44-3862-11e8-8114-b172fb6e12db.JPG',
		description: 'Collab.	A strategy tool app for a popular video game that uses user-based data algorithm to find the best team composition for your plays.',
 		demo: 'https://dry-journey-45708.herokuapp.com/',
		github: 'https://github.com/thisiswhale/NerfThis',
		skills: ['HTML' , 'Bootstrap' , 'Node.js' , 'Express', 'MySql']
	},
	{
		id:'proj-emviews',
		title: 'Emviews',
		alt:'Emviews image',
		image: 'https://user-images.githubusercontent.com/16066443/38350962-5f47b006-3862-11e8-9473-480603b5b0aa.jpg',
		description: 'Collab. One-stop shop product search app that displays everything needed to make an informed purchase decision under one browser page.',
		demo: 'https://emviews.github.io/EmViews/',
		github: 'https://github.com/EmViews/EmViews',
		skills: ['HTML', 'Bootstrap', 'jQuery', 'Ajax']
	},
	{
		id:'proj-pokemon-hangman',
		title: "Who's That Pokemon",
		image: 'https://user-images.githubusercontent.com/16066443/27000477-f9b45b6c-4d67-11e7-9072-01046fe262a3.JPG',
		alt:'pokemon hangman image',
		description: 'Personal. A simple Hangman game with that nostalgia Pokemon feels. It got the Pokemon fonts, it got the Pokemon crys, and it got that Pokemon Theme. Gotta Guess Them ALL!!',
		demo: 'https://thisiswhale.github.io/WhosThatPokemon/',
		github: 'https://github.com/thisiswhale/WhosThatPokemon',
		skills: ['HTML', 'CSS', 'JavaScript']
	},
	{
		id:'proj-pomodoro',
		title: "Pomodoro",
		image: 'https://user-images.githubusercontent.com/16066443/38352341-b6aaea0c-3867-11e8-9e22-bde89bb14721.JPG',
		alt:'pomodoro image',
		description: 'Personal. A simple timer that aids your productivity up.',
		demo: 'https://thisiswhale.github.io/Pomodoro-Timer/',
		github: 'https://github.com/thisiswhale/Pomodoro-Timer',
		skills: ['HTML', 'Sass', 'JavaScript']
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
		<nav className="navbar navbar-expand-sm navbar-dark">
		  <a className="navbar-brand font-weight-bold">WILLIAM LEUNG</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
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
			<div className='container-fluid about' id='about'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='text-sm-center'>Bio</h1>
						</div>
						<div className='col-md-8 order-md-2 text-sm-center'>
              <div className='item-wrapper'>
                <img className='img-fluid img-thumbnail mx-auto' src='http://via.placeholder.com/400x400' alt='picuter'/>
              </div>
            </div>
            <div className='col-md-4 order-md-1  text-sm-center'>
              <h5>Hello.</h5>
              <hr/>
              <p>My name is Will. I'm a Full Stack Developer based in Los Angeles, CA. I enjoy more on learning Front-end technologies. I have a niche in computers and passionatate to learning new technologies.
              </p>
              <hr/>
            </div>
					</div>
				</div>
			</div>
	);
}

const Skills = () => {
	return (
			<div className='container-fluid skills' id='skills'>
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
	);
}

const Work = () => {
	return (
	<div className='container-fluid work' id='work'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='text-sm-center'>PROJECTS</h1>
					</div>
					{
						work.map( project =>{
							let tech = project.skills.join(' / ');
							return(
								<div className='card-wrapper col-md-6 col-lg-4'>
										<div className='card'  id={project.id}>
		                  <img className='img-fluid' src={project.image} alt={project.alt}/>
												<div className='card-block text-sm-center'>
													<h4 className="card-title">{project.title}</h4>
													<hr/>
													<p className="card-text">{project.description}</p>
													<hr/>
													<div className='small-text'>
														<p className="card-text"><small>{tech}</small></p>
													</div>
													<div className='footer-text'>
														<a href={project.demo} className="card-link demo-link ">Demo</a>
														<a href={project.github} className="card-link code-link inlineRight">Code</a>
													</div>
												</div>
										</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
}

const Footer = () => {
	return (
			<div className='container-fluid contact' id='contact'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h4 className='text-sm-center contact-title'>Contact</h4>
						</div>
						<div className='col-md-12'>
							<p className='text-sm-center'>I am avaialble to website design and development work. If you have any projects that you'd like help with, I'd love to work with you. </p>
						</div>
						<div className='col-md-12 text-sm-center '>
							<a href='https://github.com/thisiswhale' target='_blank'><i className="fab fa-github fa-2x icon-github "></i></a>
							<a href="mailto:william.kou.leung@gmail.com" target="_top"><i className="fas fa-envelope fa-2x icon-envelope"></i></a>
							<a href='https://www.linkedin.com/in/william-kou-leung/' target='_blank'><i className="fab fa-linkedin fa-2x icon-linkedin"></i></a>
						</div>
					</div>
				</div>
			</div>
	)
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
