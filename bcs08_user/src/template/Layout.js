import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
//props.children
export default function Layout({children}) {
  return (
    <div className='space-y-10'>
        {/* shows a Header component, underneath
        it renders whatever is passed in as children */}
        <Header/>
          {children}
        <Footer/>
    </div>
  );
}