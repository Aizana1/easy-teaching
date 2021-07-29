import { combineReducers } from "redux";
import testReducer from './testReducer';
import teacherReducer from './teacherReducer';
import studentReducer from './studentReducer';
import createHomeworkReducer from './homeworkReducer';

export const rootReducer = combineReducers({ test: testReducer,  teacher: teacherReducer,
  student: studentReducer, createHomework: createHomeworkReducer });

// export const rootReducer = combineReducers({ testReducer,  teacherReducer, studentReducer, });
  