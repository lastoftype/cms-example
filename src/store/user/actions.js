import * as types from './action-types';

export const setLoading = (bool) => {
	return {
		type: types.SET_LOADING,
		payload: bool
	};
};
