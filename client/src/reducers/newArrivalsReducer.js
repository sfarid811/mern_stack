import { GET_NEW_ARRIVALS} from '../constants/productConstants';


const INITIAL_STATE = {
	newArrivals: [],
};

const newArrivalsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_NEW_ARRIVALS:
			return {
				newArrivals: [...action.payload],
			};

		default:
			return state;
	}
};

export default newArrivalsReducer;