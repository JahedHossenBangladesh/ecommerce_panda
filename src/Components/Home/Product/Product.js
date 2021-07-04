import React from 'react';
import fakedata from '../fakedat/fakedata';
import maleData from '../fakedat/maleData';
import Item from '../Item/Item';
import './Product.css';


const Product = () => {



const ladiesItem = fakedata.map((item) =>{
   return (
     <div className="col-sm-4">
       <Item key={item.key} item={item} />
     </div>
   );
})

const maleItem = maleData.map((item) =>{ 
  return (
    <div className="col-sm-4">
      <Item key={item.key} item={item}/>
    </div>
  )
}
  )


    return (
      <div style={{ marginTop: "20px" }}>
        <h4 className="pr-5 position-title"> WOMAN JACKET</h4>
        <div className="container">
          <div className="row">{ladiesItem}</div>
        </div>
        <h4 className="pr-5 position-title"> MAN JACKET</h4>
        <div className="container">
          <div className="row">{maleItem}</div>
        </div>
      </div>
    );
};

export default Product;