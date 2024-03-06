import React,{ Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import ClassComponent from './Composants/ClassComponent'
//import FunctionalComponent from './Composants/FunctionalComponent'

import { Update } from './lifeCycle[CC]/Update'

//import FcLifeCycle from './lifeCycle[FC]/FcLifeCycle'
import { Route, Routes } from 'react-router-dom'
import Counter from './Composants/Counter'
import CounterToolKit from './Composants/CounterToolKit'
//import NotFound from './Composants/NotFound'
const FcLifeCycle = React.lazy(()=>import("./lifeCycle[FC]/FcLifeCycle"))
const ClassComponent = React.lazy(()=>import("./Composants/ClassComponent"))
const FunctionalComponent = React.lazy(()=>import("./Composants/FunctionalComponent"))
const NotFound = React.lazy(()=>import("./Composants/NotFound"))


function App() {
  
  return (
  <> 
  <Suspense fallback={<p>Waitng for the server ********</p>}>
  <Routes>
    <Route path="/routes">
      <Route index element={<FunctionalComponent/>}/> 
      <Route  path ="counter" element={<Counter/>}/> 
      <Route  path ="counter-toolkit" element={<CounterToolKit/>}/> 
 <Route path = "updating" element = {<Update/>} />
  <Route path = "updating/id" element = {<FcLifeCycle/>} />
  <Route path = "ClassComponent" element = {<ClassComponent/>}/>
  </Route>
  <Route path = "*" element = {<NotFound/>} />
    </Routes>
    </Suspense>
    </>
  );
}

export default App ;
