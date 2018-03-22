import {
	CAT_FETCH,
	LANG_SET,
	LANG_FETCH,
	LANG_TITLE_FETCH,
	LANG_DECS_FETCH,
	LANG_FOOTER
} from '../actions/types';

const INITIAL_STATE = {
	categories: ['ALL', 'RUBY', 'SAPPHIRE', 'JADE', 'SPINEL'],
	language: '',
	title: [],
	descs: [],
	footers: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CAT_FETCH:
			return { ...state, categories: action.payload }
		case LANG_SET:
		case LANG_FETCH:
			return { ...state, language: action.payload }
		case LANG_TITLE_FETCH:
			return { ...state, title: action.payload }
		case LANG_DECS_FETCH:
			return { ...state, descs: action.payload }
		case LANG_FOOTER:
			return { ...state, footers: action.payload }
			
		default:
			return state;
	}
}; 