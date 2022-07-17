
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes'; 

function App(){
  return(
  <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path='/' element={<MyNotes />} />
    </Routes>
    
  </BrowserRouter>
);
}
 
export default App;

/*
function App() {
  return (
   <BrowserRouter>
    <Navbaar/>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/view/:id" element={<Details/>} />
    </Routes>
    
   </BrowserRouter>
  );
}           */