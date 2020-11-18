import {carReducer} from './carReducer';
import {userReducer, userLogin} from './userReducer';
import {combineReducers} from 'redux';
import {messageReducer} from './messageReducer';

//kuriamas pagrindinis reduceris kuris turi visus reducerius
export default combineReducers({
  cars: carReducer,
  users: userReducer,
  message: messageReducer,
  login: userLogin,
});
