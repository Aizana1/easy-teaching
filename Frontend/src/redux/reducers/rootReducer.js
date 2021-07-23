import { combineReducers } from 'redux';
import teacherReducer from './teacherReducer';
import studentReducer from './studentReducer';
// import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  teacher: teacherReducer,
  student: studentReducer,
});

export default rootReducer;
