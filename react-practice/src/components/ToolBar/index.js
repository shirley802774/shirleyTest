import React from 'react';
import "./toolBar.scss";
import PropTypes from 'prop-types';
import { useState } from 'react';


const ToolBar = ({dataTheme, setDataTheme, setDataProd, tabData}) => {
	const [prodDataId, setProdDataId] = useState(dataTheme.Id);
	const changeTheme = (prodData, prodId) =>{
		setDataProd(prodData.Nodes);
		setProdDataId(prodId);
	}

	return (
		<div className="c-toolBar">
			<ul className="c-toolBar__content">
				{
					tabData.map((item) =>
					(<li key={item.BlockId} className={`c-toolBar__item ${item.BlockId === prodDataId ? "is_active" : ""}`} onClick={changeTheme(item, item.BlockId)}>{item.Nodes[0].Link.Text}</li>)
					)
				}
				{/* <li className={"c-toolBar__item " + active} onClick={isActive(1)}>{dataTheme?.Link?.Text}</li> */}
			</ul>
		</div>

	);
};


export default ToolBar;