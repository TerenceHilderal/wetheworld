import axios from 'axios';
import { useState, useEffect } from 'react';

const Countries = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;currencies;flag',
			)
			.then(({ data }) => setData(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='countries'>
			<ul className='countries-list'>
				{data.map((country) => (
					<li>{country.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Countries;
