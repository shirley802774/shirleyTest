import React, { useState } from 'react';
import "./pagination.scss";


const Pagination = () => {

	const [page, setPage] = useState(1);
	return (
		<div className="c-pagination">
			<div className="c-pagination__button c-pagination__button--prev"></div>
			<div className="c-pagination__value"><span>{page}</span>/<span>3</span></div>
			<div className="c-pagination__button c-pagination__button--next"></div>
		</div>
	);
};

export default Pagination;