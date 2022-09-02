import React from 'react';
import "./toolBar.scss";
import PropTypes from 'prop-types';
import { useState } from 'react';


const ToolBar = ({dataTheme, tabData}) => {
	const changeTheme = () =>{
		
	}

	return (
		<div className="c-toolBar">
			<ul className="c-toolBar__content">
				{
					tabData.map((item) =>
					(<li key={item.BlockId} className={`c-toolBar__item ${item.BlockId === dataTheme?.Id ? "is_active" : ""}`} onClick={changeTheme}>{item.Nodes[0].Link.Text}</li>)
					)
				}
				{/* <li className={"c-toolBar__item " + active} onClick={isActive(1)}>{dataTheme?.Link?.Text}</li> */}
			</ul>
		</div>

	);
};


export default ToolBar;