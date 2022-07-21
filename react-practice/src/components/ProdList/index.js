import React, {useState, useEffect} from "react";
import "./prodList.scss";
import Pagination from "../Pagination";
import { data } from '../../data';

const ProdList = () => {
	const [dataProd, setDataProd] = useState([]);
	useEffect(() => {
		data.forEach((item) => {
			if( item.Id >= 7 ){
				setDataProd((prev) => [...prev,item]);
			}
		});
	}, [data]);

	const switchUrl = (urlType) => {
		switch (urlType){
			case 'Search':
				return 'https://ecshweb.pchome.com.tw/search/v3.3/?q=';
			case 'Store':
				return 'https://24h.pchome.com.tw/store/';
			case 'Prod':
				return 'https://24h.pchome.com.tw/prod/';
			default:
				break;
		}
	};

	const ListItems =()=>{
		return dataProd.map((item) =>
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
			<ul className="c-prodList__list">
				{ListItems()}
			</ul>
			<Pagination />
		</div>
	);
};

export default ProdList;