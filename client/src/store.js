import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducers  from './reducers/productReducers';
import userRegisterReducer  from './reducers/userReducers';
import userLoginReducer  from './reducers/userReducers';


const reducer = combineReducers({
   productList: productReducers,
   userRegister: userRegisterReducer,
   userLogin: userLoginReducer,
  })

const initialState = {

};
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;