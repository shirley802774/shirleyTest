import React from 'react';
import './prodList.scss';
const ProdList = () => {
	return(
    <div className="c-prodList">
			<div className="o-listHead">
				 <div className="o-listHead__wrapper">
					 <h3 className="o-listHead__title">最新降價
					 </h3>
					 <a className="o-listHead__link" href="#">看更多</a>
				 </div>
			</div>
	  </div>
	);
};

export default ProdList;