import {carReducer} from './carReducer';
import {userReducer} from './userReducer';
import {userLogin} from './userAuthReducer';
import {combineReducers} from 'redux';

//kuriamas pagrindinis reduceris kuris turi visus reducerius
export default combineReducers({
  cars: carReducer,
  users: userReducer,
  login: userLogin,
});
