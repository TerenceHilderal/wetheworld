import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => {
	const handleDelete = () => {
		axios.delete(`http://localhost:3003/articles/${id}`);
	};

	return (
		<button
			onClick={() => {
				if (window.confirm('Do you want to delete this article?')) {
					handleDelete();
				}
			}}
		>
			Delete
		</button>
	);
};

export default DeleteArticle;
