import './App.css';
import Introduccion from './components/introduccion/introduccion';
import Box1 from './components/box1/Box1';
import Box2 from './components/box2/Box2';
import Box3 from './components/box3/Box3';
import Box4 from './components/box4/Box4';
import Box5 from './components/box5.jsx/Box5';

function App() {
  return (
    <div className="App">
      <Introduccion />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </div>
  );
}

export default App;
