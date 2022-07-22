import React, { useState, useEffect } from 'react';
import "./pagination.scss";
import { data } from '../../data';


const Pagination = () => {
	const [dataProd, setDataProd] = useState([]);
	useEffect(() => {
		data.forEach((item) => {
			if( item.Id >= 7 ){
				setDataProd((prev) => [...prev,item]);
			}
		});
	}, [data]);

	const total = Math.ceil(dataProd.length / 6);	//向上取整,有小數就整數部分加1
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