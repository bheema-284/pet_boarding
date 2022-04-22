import './App.css'
import { Home } from './components/Home';
import { CreateEntity } from './components/CreateEntity';
import { Entity } from './components/Entity';
import { Nabar } from './components/Navbar';
import {Route,Routes} from "react-router-dom"
function App() {  

  return (
    <div className="App">
      <Nabar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/listing/:id" element={<Entity />}></Route>
          <Route path="/listing" element={<CreateEntity />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
