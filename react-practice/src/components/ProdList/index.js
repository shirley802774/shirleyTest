import React, {useState, useEffect} from "react";
import "./prodList.scss";
import Pagination from "../Pagination";
import { data } from '../../data';
import { switchUrl } from '../../Utils';

const ProdList = () => {
	const [dataProd, setDataProd] = useState([]);
	useEffect(() => {
		data.forEach((item) => {
			if( item.Id >= 7 ){
				setDataProd((prev) => [...prev,item]);
			}
		});
	}, [data]);


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