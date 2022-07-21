import React, {useState, useEffect} from "react";
import "./banner.scss";
import { data } from '../../data';
// import FakeImg from "react-fakeimg";

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
			{/* <FakeImg width={720} height={1192} bgColor="#ccc" fontColor="#666" alt="FakeImg" /> */}
		</div>
	);
};

export default Banner;