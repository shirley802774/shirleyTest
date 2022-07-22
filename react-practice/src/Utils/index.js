const switchUrl = (urlType) => {
	switch (urlType){
		case 'Search':
			return 'https://ecshweb.pchome.com.tw/search/v3.3/?q=';
		case 'Store':
			return 'https://24h.pchome.com.tw/store/';
		case 'Prod':
			return 'https://24h.pchome.com.tw/prod/';
		default:
			break;
	}
};

export { switchUrl };;