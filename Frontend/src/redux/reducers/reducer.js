import { combineReducers } from 'redux'
import testReducer from './testReducer'
import teacherReducer from './teacherReducer'
import studentReducer from './studentReducer'
import showTeacherReducer from '../reducers/showTeacherReducer'
import allTeacherReducer from '../reducers/allTeacherReducer'
import showStudentsReducer from './showStudentsReducer'

export const rootReducer = combineReducers({
  test: testReducer,
  teacher: teacherReducer,
  student: studentReducer,
  teachers: showTeacherReducer,
  allTeachers: allTeacherReducer,
  students: showStudentsReducer,
})
