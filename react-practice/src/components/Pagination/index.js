import React from 'react';
import "./pagination.scss";
import PropTypes from 'prop-types';


const Pagination = ({dataProd, page, setPage}) => {

	const total = Math.ceil(dataProd.length / 6);	//向上取整,有小數就整數部分加1
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

Pagination.propTypes = {
	dataProd: PropTypes.arrayOf(
		PropTypes.shape({
			Id: PropTypes.number,
			Link: PropTypes.shape({
				Text: PropTypes.string,
				Text1: PropTypes.string,
				Url: PropTypes.string,
			}),
			Img: PropTypes.shape({
				Src: PropTypes.string,
			}),
			ExtraData: PropTypes.shape({
				ElementType: PropTypes.string,
				Sort: PropTypes.number,
			})
		})
	),
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
}

export default Pagination;