import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import News from './pages/News';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/news' exact component={News} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
