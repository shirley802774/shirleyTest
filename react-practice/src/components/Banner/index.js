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
	dataTheme: PropTypes.objectOf(
		PropTypes.shape({
			Id: PropTypes.number,
			Link: PropTypes.shape({
				Text: PropTypes.string,
				Text2: PropTypes.string,
				Background: PropTypes.string,
			}),
			Img: PropTypes.shape({
				Src: PropTypes.string,
				Text: PropTypes.string,
			})
		})
	)
}

export default Banner;