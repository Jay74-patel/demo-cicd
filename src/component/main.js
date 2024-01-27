import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { Home } from './home';
import { About } from './about';
import { Service } from './service';
import { Contact } from './contact';
import { Form } from './form';



export const Main = () => {

  return (
    <main className="main-content">
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='services' element={<Service/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='form' element={<Form/>}/>
        </Routes>
  </main>
  )
}
