import React from 'react';
import './App.css';
import AddPost from './components/add-post/AddPost';
import Lists from './components/lists/Lists';


function App() {
  return (
    <div className="app" style={{height:"100vh"}}>
        <h1>React Test Task</h1>
        <div className='my-row' >
          <Lists/>
          <AddPost/>
        </div>
    </div>
  );
}

export default App;
