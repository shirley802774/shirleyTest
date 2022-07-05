import React from "react";
import "./theme.scss";
import Banner from "../Banner";
import { tag } from '../../data';

const Theme = () => {
	const TagItems = () => {
		return tag.map((item) =>
			<li key={item.id}><a href="#" className="c-tag">{item.title}</a></li>
		);
	}
	// const tagItems = tag.map((item) =>
	// 	<li key={item.id}><a href="#" className="c-tag">{item.title}</a></li>
	// );
	return (
		<div className="c-theme">
			<div className="c-theme__content">
				<div className="c-theme__tag">主題推薦</div>
				<h3 className="c-theme__title">3C 電競年中戰</h3>
				<ul className="c-theme__keyWordTags">
					{TagItems()}
				</ul>
			</div>
			<Banner />
		</div>
	);
};

export default Theme;