import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';

const Countries = () => {
	const [data, setData] = useState([]);
	const [rangeValue, setRangeValue] = useState(40);
	const [selectedRadio, setSelectedRadio] = useState('');
	const radios = ['Africa', 'Asia', 'America', 'Europe', 'Oceania'];

	useEffect(() => {
		axios
			.get(
				'https://restcountries.com/v2/all?fields=name,capital,currencies,population,region,flag',
			)
			.then((res) => {
				console.log(res);
				setData(res.data);
			});
	}, []);

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
				{data
					.filter((country) => country.region.includes(selectedRadio))
					.sort((a, b) => b.population - a.population)
					.filter((country, index) => index < rangeValue)
					.map((country) => (
						<Card country={country} key={country.name} />
					))}
			</ul>
		</div>
	);
};

export default Countries;
