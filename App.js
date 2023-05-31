import React from 'react';
import './App.css';
import ListmployeeComponent from './components/ListmployeeComponent';
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import { useState } from 'react';
import SearchFilter from './components/SearchFilter.js'
import EmployeeSearch from './components/Search';
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <HeaderComponents/>
      <div>
       <BrowserRouter>
       {/* <div className='App'>
            <input type='text' placeholder='Search..'/>
          </div> */}
         <Routes>
         
          
          {/* <HeaderComponents /> */}
                <Route path="/" Component={ListmployeeComponent}></Route>
                {/* <Route path="/search" Component={SearchFilter}></Route> */}
                <Route path="/employees" Component={ListmployeeComponent}></Route>
                <Route path="/addemployee/:id" Component={CreateEmployeeComponent}></Route>
                <Route path="/viewemployee/:id" Component={ViewEmployeeComponent}></Route>
                {/* <Route path="/sr" Component={EmployeeSearch}></Route> */}
                {/* <Route path="/updateemployee/:id" Component={UpdateEmployeeComponent}></Route> */}
                {/* <ListmployeeComponent /> */}


            {/* <FooterComponents /> */}


          
         </Routes>
        </BrowserRouter>
        </div>
      {/* <SearchFilter/> */}
      {/* <FooterComponents/> */}
    </div>
  );
}

export default App;
