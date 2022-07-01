import React from "react";
import "./prodList.scss"
import Pagination from "../Pagination"

const content = [
	{image:'https://fakeimg.pl/320x320/?text=1st',
	title:'test1',
	price:1111},
	{image:'https://fakeimg.pl/320x320/',title:'test2222222',price:222},
	{image:'https://fakeimg.pl/320x320/?text=3rd',title:'test333',price:33},
	{image:'https://fakeimg.pl/320x320/?text=4th',title:'test444',price:4444},
	{image:'https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg',
	title:'G733ZM-0022S12900H 電競筆電',
	price:56900},
	{image:'https://fakeimg.pl/320x320/?text=6th',title:'test6',price:666},
]


const Prod = (props) => {
	const { imgSrc, name, price } = props;
	return (
		<div className="c-prod">
			<img className="c-prod__img" src={imgSrc} alt={name} />
			<h3 className="c-prod__name">{name}</h3>
			<div className="c-prod__price">${price}</div>
		</div>
	);
};

const ProdList = () => {
	return (
		<div className="c-prodList">
			<ul className="c-prodList__list">
				<li><Prod imgSrc="https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg" name="G733ZM-0022S12900H 電競筆電" price="56900" /></li>
			</ul>
			<Pagination />
		</div>
	);
};

export default ProdList;