import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

const Main = () => {
     return (
          <div className='w-full'>
               <Header/>
               <Outlet/>
               <Footer/>
          </div>
     );
};

export default Main;