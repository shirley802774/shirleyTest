import React from "react";
import "./theme.scss";
import Banner from "../Banner";
import { switchUrl } from '../../Utils';
import PropTypes from 'prop-types';

const Theme = ({ dataTheme, dataTag }) => {

	// const tagItems = tag.map((item) =>
	// 	<li key={item.id}><a href="#" className="c-tag">{item.title}</a></li>
	// );
	return (
		<div className="c-theme" style={{backgroundColor: dataTheme?.Link?.Background,}}>
			<div className="c-theme__content">
				<div className="c-theme__tag">主題推薦</div>
				<h3 className="c-theme__title" key={dataTheme?.Id}>{dataTheme?.Link?.Text2}</h3>	{/*加問號判斷有無資料*/}
				<ul className="c-theme__keyWordTags">
					{/* {tag.map((item) =>
						(<li key={item.id}><a href="#" className="c-tag">{item.title}</a></li>)
					)} */}
					{dataTag.map((item) =>
						(<li key={item.Id}><a href={item?.ExtraData?.ElementType==="Url" ? (item?.Link?.Url) : (switchUrl(item?.ExtraData?.ElementType) + item?.Link?.Text)} className="c-tag">{item?.Link?.Text}</a></li>)	/*寫這麼長可以嗎，但又不知道怎麼拉出來寫*/
					)}
				</ul> 
			</div>
			<Banner />
			
		</div>
	);
};

Theme.propTypes = {
	dataTheme: PropTypes.object.isRequired,
	dataTag: PropTypes.array.isRequired,
}

export default Theme;