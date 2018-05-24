import { combineReducers } from 'redux';
import RenderHome from './renderHome'
import muzee from './muzee'
import map from './renderMap'
import register from './registerState'

export const allReducers = combineReducers({
    home: RenderHome,
    muzee: muzee,
    map: map,
    register: register
});