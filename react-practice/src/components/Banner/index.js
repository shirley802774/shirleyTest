import React from "react";
import "./banner.scss";
// import FakeImg from "react-fakeimg";

const Banner = () => {
	return (
		<div className="c-banner">
			<img src="https://fakeimg.pl/720x1192/" alt="" />
			{/* <FakeImg width={720} height={1192} bgColor="#ccc" fontColor="#666" alt="FakeImg" /> */}
		</div>
	);
};

export default Banner;