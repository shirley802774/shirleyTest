import React, {useState} from "react";
import "./prodList.scss";
import Pagination from "../Pagination";
import { switchUrl } from '../../Utils';
import PropTypes from 'prop-types';

const ProdList = ({ dataProd }) => {
	const [page, setPage] = useState(1);

	const ListItems =(page)=>{
		return dataProd.slice((page-1)*6, page*6).map((item) =>
		{
			return (
			<li key={item.Id}>
				<a className="c-prod" href={item?.ExtraData?.ElementType==="Url" ? (item?.Link?.Url) : (switchUrl(item?.ExtraData?.ElementType) + item?.Link?.Url)}>
					<img className="c-prod__img" src={'https://cs-a.ecimg.tw' + item?.Img?.Src} alt={item?.Link?.Text} />
					<h3 className="c-prod__name">{item?.Link?.Text}</h3>
					<div className="c-prod__price">${item?.Link?.Text1}</div>
				</a>
			</li>
			)
		})
	}
	return (
		<div className="c-prodList">
			<div className="c-prodList__list">
				<div className="c-prodList__content">
					<ul className="c-prodList__group">{ListItems(page)}</ul>
					{/* <ul className="c-prodList__group">{ListItems(0, 6)}</ul>
					<ul className="c-prodList__group">{ListItems(6, 12)}</ul>
					<ul className="c-prodList__group">{ListItems(12, 18)}</ul> */}
				</div>
			</div>
			<Pagination dataProd={dataProd} page={page} setPage={setPage}/>
		</div>
	);
};

ProdList.propTypes = {
	dataProd: PropTypes.array.isRequired,
}

export default ProdList;