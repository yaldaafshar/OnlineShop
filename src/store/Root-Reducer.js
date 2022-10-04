import { combineReducers } from 'redux';
import { userReducer } from './user/User.reducer';
export const RootReducer = combineReducers({
    user: userReducer
})