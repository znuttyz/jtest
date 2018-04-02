import axios from 'axios';

import {
	CAT_FETCH,
	LANG_SET,
	LANG_FETCH,
	LANG_TITLE_FETCH,
	LANG_DECS_FETCH,
	LANG_FOOTER
} from './types';

axios.defaults.baseURL = 'http://128.199.77.21:9000';
// axios.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;
axios.defaults.withCredentials = true;

export const catFetch = () => {
	return(dispatch) => {
		catFetching(dispatch);
	}
}

const catFetching = (dispatch) => {
	console.log('check catFetch');
		axios.post('/language/getCat')
		.then((response) => dispatch({ type: CAT_FETCH, payload: response.data }))
		.catch((response) => console.log('Unable to fetch categories.', response));
}

export const setLanguage = (lang, page) => {
	return(dispatch) => {
		console.log('setLanguage', lang)
		axios.post('/language/setLanguage', {lang})
		.then((response) => {
			catFetching(dispatch)
			titleFetching(dispatch, page)
			descFetching(dispatch, page)
			footerFetching(dispatch);
			dispatch({ type: LANG_SET, payload: response.data })
		})
		.catch((response) => console.log('Unable to set Language.', response));
	}
}

export const fetchLanguage = () => {
	return(dispatch) => {
		console.log('fetchLanguage')
		axios.get('/language/getLanguage')
		.then((response) => dispatch({ type: LANG_FETCH, payload: response.data }))
		.catch((error) => console.log('Unable to fetch Language'));
	}
}

export const fetchTitle = (page) => {
	return(dispatch) => {
		titleFetching(dispatch, page);
	}
}

const titleFetching = (dispatch, page) => {
	console.log('fetchTitle')
	axios.post('/language/getTitle', {page})
		.then((response) => dispatch({ type: LANG_TITLE_FETCH, payload: response.data }))
		.catch((error) => console.log('Unable to fetch Language Title'));
}

export const fetchDesc = (page) => {
	return(dispatch) => {
		descFetching(dispatch, page);
	}
}

const descFetching = (dispatch, page) => {
	console.log('fetchTitle')
	axios.post('/language/getDesc', {page})
		.then((response) => dispatch({ type: LANG_DECS_FETCH, payload: response.data }))
		.catch((error) => console.log('Unable to fetch Language Description'));
}

export const fetchFooter = () => {
	return(dispatch) => {
		footerFetching(dispatch)
	}
}

const footerFetching = (dispatch) => {
	console.log('fetchFooter')
	axios.get('/language/getFooter')
		.then((response) => dispatch({ type: LANG_FOOTER, payload: response.data }))
		.catch((error) => console.log('Unable to fetch Language Footer'));
}
