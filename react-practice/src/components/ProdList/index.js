import React from "react";
import "./prodList.scss";
import Pagination from "../Pagination";
import { data } from '../../data';

const ProdList = () => {
	
	const ListItems =()=>{
		return data.map((item) =>
		{
			console.log(item);

			return (
			<li key={item.id}>
				<a className="c-prod" href="#">
					<img className="c-prod__img" src={item.image} alt={item.name} />
					<h3 className="c-prod__name">{item.name}</h3>
					<div className="c-prod__price">${item.price}</div>
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