import './App.css';
import Student from './components/Pagination/Student';
import ChildComp from './components/props/ChildComp';
import ParentComp from './components/props/ParentComp';
import Division from './components/log4jDemo/Division';


function App() {
  return (
    <div className="App">
      <h1>Addition</h1>
      <Division/>
    </div>
  );
}

export default App;
