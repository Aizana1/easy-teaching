import { combineReducers } from 'redux'
import testReducer from './testReducer'
import teacherReducer from './teacherReducer'
import studentReducer from './studentReducer'
import showTeacherReducer from '../reducers/showTeacherReducer'
import allTeacherReducer from '../reducers/allTeacherReducer'
import createHomeworkReducer from './homeworkReducer';

export const rootReducer = combineReducers({
  test: testReducer,
  teacher: teacherReducer,
  student: studentReducer,
  teachers: showTeacherReducer,
  allTeachers: allTeacherReducer,
  createHomework: createHomeworkReducer
})


// export const rootReducer = combineReducers({ testReducer,  teacherReducer, studentReducer, });
