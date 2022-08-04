import React, {useState, useEffect} from "react";
import "./banner.scss";
import { data } from '../../data';

const Banner = () => {
	const [dataTheme, setDataTheme] = useState({});
	useEffect(() => {
		data.forEach((item) => {
			if( item.Id === 1){
				setDataTheme({...item});
			}
		});
	}, [data]);

	return (
		<div className="c-banner">
			<img src={dataTheme?.Img?.Src} alt="" />
		</div>
	);
};

export default Banner;