import {combineReducers} from 'redux';
import sanpham from './sanpham';
import giohang from './giohang';
import message from './message';
const myReducers = combineReducers({
    sanpham,
    giohang,
    message
});

export default myReducers;