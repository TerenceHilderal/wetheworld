import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='navigation' activeClassName='nav-active'>
			<NavLink exact to='/'>
				Home
			</NavLink>
			<NavLink exact to='about'>
				About
			</NavLink>
		</div>
	);
};

export default Navigation;
