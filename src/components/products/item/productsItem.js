import React, { createElement } from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/router';
import productsStore from '~/store/products';
import cartStore from '~/store/cart';
import { observer } from 'mobx-react';
import App404 from '~/components/errors/404';

@observer class ProductsItem extends React.Component{
   render(){
      let id = +this.props.match.params.id;
      let product = productsStore.getById(id);
      
      if(product === null){
         return <App404/>;
      }

      return <div>
         <h1>{product.title}</h1>
         <div className="alert alert-success">
            { product.price }
         </div>
         <button className="btn btn-success" 
                 onClick={() => cartStore.add(product.id)}
         >
            Add to cart
         </button>
         <button className="btn btn-danger" 
                 onClick={() => cartStore.remove(product.id)}
         >
            Remove from cart
         </button>
      </div>
   }
}

export default ProductsItem;