import React from 'react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/router';
import productsStore from '~/store/products';
import { observer } from 'mobx-react';
import { Card } from 'react-bootstrap';

@observer class ProductsList extends React.Component{
   render(){
      let productsList = productsStore.items.map((product) => {
         return <div className="col col-4" key={product.id}>
            <Card>
               <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                     <strong>Price: {product.price}</strong>
                  </Card.Text>
                  <Link to={'/product/' + product.id}>
                     Get more...
                  </Link>
                  <hr/>
                  button hw
               </Card.Body>
            </Card>
         </div>
      });

      return <div>
         <h1>Home</h1>
         <div className="row">
            {productsList}
         </div>
      </div>
   }
}

export default ProductsList;