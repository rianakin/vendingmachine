import { ActionTypes } from '../actions/actions';

export const initialState = {
	productId: 0,
	credit: 0
};

function KeypadReducer(state = initialState, action ) {
	switch (action.type) {
		case ActionTypes.CHANGE_INPUT:
			return Object.assign({}, state, {
				productId: Number(state.productId) * 10 + Number(action.value),
				change: state.change
			})
		case ActionTypes.REST_CREDIT:
			return Object.assign({}, state, {
				credit: 0
			})
		case ActionTypes.CHANGE_CREDIT:
			return Object.assign({}, state, {
				credit: state.credit + Number(action.value)
			})
		default:
			return state
	}
}

export default KeypadReducer;