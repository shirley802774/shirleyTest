import React from "react";
import "./theme.scss"
import Banner from "../Banner";

const Tag = (props) => {
	const { text } = props;
	return (
		<a href="https://24h.pchome.com.tw/" className="c-tag">{text}</a>
	);
};

const Theme = () => {
	return (
		<div className="c-theme">
			<div className="c-theme__content">
				<div className="c-theme__tag">主題推薦</div>
				<h3 className="c-theme__title">3C 電競年中戰</h3>
				<ul className="c-theme__keyWordTags">
					<li><Tag text="曜越電競椅" /></li>
					<li><Tag text="羅技滑鼠下殺9折" /></li>
					<li><Tag text="HP電競筆電" /></li>
					<li><Tag text="Acer主機+電競耳麥優惠組" /></li>
					<li><Tag text="2022喇叭推薦指南" /></li>
				</ul>
			</div>
			<Banner />
		</div>
	);
};

export default Theme;