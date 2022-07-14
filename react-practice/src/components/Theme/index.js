import React, {useState, useEffect} from "react";
import "./theme.scss";
import Banner from "../Banner";
import { data1, tag } from '../../data';

const Theme = () => {
	const [dataTheme, setDataTheme] = useState({Id:undefined,Link:{Text2:undefined}});	//嚴謹一點要帶預設值，避免[]或{}空值
	const [dataTag, setDataTag] = useState([]);
	const [dataProd, setDataProd] = useState([]);

	const addData = (prev, item) => {
		prev.push(item);
		return prev;
	};
	
	useEffect(() => {
		data1.forEach((item) => {
		if( item.Id === 1){
			setDataTheme({...item});
		} else if( item.Id >=2 && item.Id <= 6 ){
			setDataTag((prev) => [...prev,item]);
		} if( item.Id >=6 ){
			setDataProd((prev) => addData(prev, item));
		}
	});
	}, [data1]);
	
	console.log(dataTheme);
	console.log(dataTag);
	console.log(dataProd);


const a ={c:'test',xxx:''}
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
						(<li key={item.Id}><a href="#" className="c-tag">{item?.Link?.Text}</a></li>)
					)}
				</ul> 
			</div>
			<Banner />
		</div>
	);
};

export default Theme;