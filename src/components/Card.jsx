const Card = ({ country }) => {
	const numberFormat = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	};
	return (
		<li className='card'>
			<img src={country.flag} alt='flag' />
			<div className='data-container'>
				<ul>
					<li>{country.name}</li>
					<li>{country.capital}</li>
					<li>Pop : {numberFormat(country.population)}</li>
					<li>
						Currency: {country.currencies[0].name}{' '}
						{country.currencies[0].symbol}{' '}
					</li>
				</ul>
			</div>
		</li>
	);
};

export default Card;
