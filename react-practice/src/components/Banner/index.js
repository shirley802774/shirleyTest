import React from "react";
import "./banner.scss";
// import { data } from '../../data';
import PropTypes from 'prop-types';


const Banner = ({dataTheme}) => {
	return (
		<div className="c-banner">
			<img src={dataTheme?.Img?.Src} alt="" />
		</div>
	);
};

Banner.propTypes = {
	dataTheme: PropTypes.object.isRequired,
}

export default Banner;