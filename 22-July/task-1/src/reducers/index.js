import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

//combineReducers: 
//Helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore

const allReducers = combineReducers ({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;