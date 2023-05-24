
import addElement  from './components/addElement';
import listarElement from "./components/listarElement";
import eachElement from "./components/eachElement";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"> El CRUD BASE DE ROYI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="aggElemento">Agregar </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
 {/*              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
</nav>
      <BrowserRouter>
         <Routes>
         <Route path='/listarElemto' element={<listarElement/>}></Route>
          <Route path='/aggElemento' element={<addElement/>}></Route>
          <Route path='/CadaElemento' element={<eachElement/>}></Route>
          </Routes>
      </BrowserRouter>
      
      <listarElement/>
    
    </div>
  );
}

export default App;
