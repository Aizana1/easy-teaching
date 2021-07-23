import { combineReducers } from "redux";
import testReducer from './testReducer';
import teacherReducer from './teacherReducer';
import studentReducer from './studentReducer';

export const rootReducer = combineReducers({ test: testReducer,  teacher: teacherReducer,
  student: studentReducer, });
