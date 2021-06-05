import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<div className='home'>
			<Logo />
			<Navigation />
			<Countries />
			<h1>Accueil</h1>
		</div>
	);
};

export default Home;
