
import './App.css';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Addtask from './screens/Addtask';
import NoteState from './context/notes/NoteState';



import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="">
    <NoteState>
    <Router>
      <div className="container">
     
        <Routes >
          <Route exact path="/" element={<Addtask/>}> </Route>
          <Route exact path="/login" element={<Login/>}> </Route>
          <Route exact path="/signup" element={<Signup/>}> </Route>

          {/* <Route exact path="/login || /signup" element={<Main/>}> </Route> */}

        </Routes>
      </div>
    </Router>
    </NoteState>
</div>
  );
}

export default App;
