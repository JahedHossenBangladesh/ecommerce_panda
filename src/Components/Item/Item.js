import React from 'react';

const Item = ({item}) => {
console.log({item});
    return (
    <div class="card" style={{width: '18rem'}}>
  <img src={item.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.detail}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
};

export default Item;