import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Article from '../components/Article';

const News = () => {
	const [newsData, setNewsData] = useState([]);
	const [author, setAuthor] = useState('');
	const [content, setContent] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		axios
			.get('http://localhost:3003/articles')
			.then((res) => setNewsData(res.data))
			.catch((error) => console.log(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (content.length < 140 && author === '') {
			setError(true);
		} else {
			axios
				.post('http://localhost:3003/articles', {
					author,
					content,
					date: Date.now(),
				})
				.then(() => {
					setError(false);
					setAuthor('');
					setContent('');
					getData();
				});
		}
	};

	return (
		<div className='news-container'>
			<Navigation />
			<Logo />
			<h1>News</h1>

			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setAuthor(e.target.value)}
					type='text'
					placeholder='name'
					value={author}
				/>
				<textarea
					style={{ border: error ? '1px solid red' : '1px solid #61dafb' }}
					onChange={(e) => setContent(e.target.value)}
					placeholder='Your comment'
					value={content}
				></textarea>
				{error && <p>Please enter a min of 140 characters</p>}
				<input type='submit' value='send' />
			</form>

			<ul>
				{newsData
					.sort((a, b) => b.date - a.date)
					.map((article) => {
						return <Article key={article.id} article={article} />;
					})}
			</ul>
		</div>
	);
};

export default News;
