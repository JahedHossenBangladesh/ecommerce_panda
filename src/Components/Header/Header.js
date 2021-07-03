import React from 'react';
import './Header.css'
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import Product from '../Product/Product'
export default function Header() {
    return (
      <div className='bg'>
        <Nav className='mb-2'/>
        <Banner />
        
        
      </div>
    );
}
