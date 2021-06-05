import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';

const Countries = () => {
	const [data, setData] = useState([]);
	const [sortedData, setSortedData] = useState([]);
	const [fetchOnce, setFetchOnce] = useState(true);
	const [rangeValue, setRangeValue] = useState(40);
	const [selectedRadio, setSelectedRadio] = useState('');
	const radios = ['Africa', 'Asia', 'America', 'Europe', 'Oceania'];

	useEffect(() => {
		if (fetchOnce) {
			axios
				.get(
					'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;currencies;flag',
				)
				.then(({ data }) => {
					setData(data);
					setFetchOnce(false);
				})
				.catch((err) => console.log(err));
		}

		const sortedCountryByPopulation = () => {
			const countryObj = Object.keys(data).map((i) => data[i]);
			const sortedCountryObj = countryObj.sort((a, b) => {
				return b.population - a.population;
			});
			sortedCountryObj.length = rangeValue;
			setSortedData(sortedCountryObj);
		};
		sortedCountryByPopulation();
	}, [data, fetchOnce, rangeValue]);

	return (
		<div className='countries'>
			<div className='sort-container'>
				<input
					type='range'
					min='1'
					max='250'
					value={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
					name='range'
					id=''
				/>
				<ul>
					{radios.map((radio) => {
						return (
							<li key={radio}>
								<input
									type='radio'
									value={radio}
									id={radio}
									checked={radio === selectedRadio}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor={radio}>{radio}</label>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='cancel'>
				{selectedRadio && (
					<h5 onClick={() => setSelectedRadio('')}>Cancel Search</h5>
				)}
			</div>
			<ul className='countries-list'>
				{sortedData
					.filter((country) => country.region.includes(selectedRadio))
					.map((country) => (
						<Card country={country} key={country.name} />
					))}
			</ul>
		</div>
	);
};

export default Countries;
