import React, {useState, useEffect} from "react";
import "./prodList.scss";
import Pagination from "../Pagination";
import { dataOriginal } from '../../data';
import { switchUrl } from '../../Utils';

const ProdList = ({ dataProd }) => {
	const [page, setPage] = useState(1);

	const switchPage = () => {
		// const total = Math.ceil(dataProd.length / 6);
		
	};

	const ListItems =(start, end)=>{
		return dataProd.slice(start, end).map((item) =>
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
					<ul className="c-prodList__group">{ListItems(0, 6)}</ul>
					<ul className="c-prodList__group">{ListItems(6, 12)}</ul>
					<ul className="c-prodList__group">{ListItems(12, 18)}</ul>
				</div>
			</div>
			<Pagination setPage={setPage}/>
		</div>
	);
};

ProdList.propTypes = {

}

export default ProdList;