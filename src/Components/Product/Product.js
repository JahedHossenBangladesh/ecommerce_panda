import React from 'react';
import Item from '../Item/Item';
import fakedata from '../fakedat/fakedata';


const Product = () => {
const ladiesItem = fakedata.map((item) =>{
   return(
        <div className="col-sm-4">
        <Item item={item}/>
    </div>)
})




    return (
      <div style={{ marginTop:"20px" }}>
        <div className="container">
          <div className="row">{ladiesItem}</div>
        </div>
      </div>
    );
};

export default Product;