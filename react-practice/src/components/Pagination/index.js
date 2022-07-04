import React, { useState } from 'react';
import "./pagination.scss";


const Pagination = () => {
	const total = 3;
	const [page, setPage] = useState(1);
	const subtract = () => {
		if(page > 1){
			setPage(page - 1);
		}
	};
	const add = () => {
		if (page < total){
			setPage(page + 1);
		}
	};
	return (
		<div className="c-pagination">
			<div className="c-pagination__button c-pagination__button--prev" onClick={subtract}></div>
			<div className="c-pagination__value"><span>{page}</span>/<span>{total}</span></div>
			<div className="c-pagination__button c-pagination__button--next" onClick={add}></div>
		</div>
	);
};

export default Pagination;