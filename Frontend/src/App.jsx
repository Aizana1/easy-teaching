import React, { useState } from 'react';
import { Main } from './components/teacher/main/Main';
import { StudMain } from './components/student/main/StudMain';

function App() {

  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);

  return (
    <div className="App">
      {teacher && <Main />}
      {student && <StudMain />}
     
    </div>
  );
}

export default App;
