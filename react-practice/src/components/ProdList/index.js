import React from "react";
import "./prodList.scss"
import Pagination from "../Pagination"

// const Prod = (props) => {
// 	const { imgSrc, name, price } = props;
// 	return (
// 		<div className="c-prod">
// 			<img className="c-prod__img" src={imgSrc} alt={name} />
// 			<h3 className="c-prod__name">{name}</h3>
// 			<div className="c-prod__price">${price}</div>
// 		</div>
// 	);
// };

const ProdList = () => {
	const content = [
		{id:1, image:'https://fakeimg.pl/320x320/?text=1st',
		name:'test1',
		price:1111},
		{id:2, image:'https://fakeimg.pl/320x320/',name:'test2222222',price:222},
		{id:3, image:'https://fakeimg.pl/320x320/?text=3rd',name:'test333',price:33},
		{id:4, image:'https://fakeimg.pl/320x320/?text=4th',name:'test444',price:4444},
		{id:5, image:'https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg',
		name:'G733ZM-0022S12900H 電競筆電',
		price:56900},
		{id:6, image:'https://fakeimg.pl/320x320/?text=6th',name:'test6',price:666},
	];
	const listItems = content.map((item) =>
		<li key={item.id}>
			<a className="c-prod" href="#">
				<img className="c-prod__img" src={item.image} alt={item.name} />
				<h3 className="c-prod__name">{item.name}</h3>
				<div className="c-prod__price">${item.price}</div>
			</a>
		</li>
	);
	return (
		<div className="c-prodList">
			<ul className="c-prodList__list">
				{/* <li><Prod imgSrc="https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg" name="G733ZM-0022S12900H 電競筆電" price="56900" /></li> */}
				{listItems}
			</ul>
			<Pagination />
		</div>
	);
};

export default ProdList;