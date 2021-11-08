import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducers  from './reducers/productReducers';
import userRegisterReducer  from './reducers/userReducers';
import userLoginReducer  from './reducers/userReducers';
import categoryReducer  from './reducers/categoryReducers';
import shopFilterReducer  from './reducers/shopFilterReducers';
import alertReducers from './reducers/alertReducers';


const reducer = combineReducers({
   productList: productReducers,
   userRegister: userRegisterReducer,
   userLogin: userLoginReducer,
   categoryReducer: categoryReducer,
   filterReducer: shopFilterReducer,
  alertReducer : alertReducers

  })
  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;