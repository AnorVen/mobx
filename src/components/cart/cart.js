import React from 'react';
import Minmax from '~/components/inputs/minmax';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { routesMap } from '~/router';
import withStore from '~/hocs/withStore';

class Cart extends React.Component{
   render(){
      let cartStore = this.props.stores.cart;
      let productsStore = this.props.stores.products;
      let products = cartStore.products;

      let productsRows = products.map((pr, i) => {
         let productInfo = productsStore.getById(pr.id);

         return <tr key={productInfo.id}>
            <td>{productInfo.title}</td>
            <td>{productInfo.price}</td>
            <td>
               <Minmax min={1} 
                       max={productInfo.rest} 
                       value={pr.cnt} 
                       onChange={(val) => cartStore.changeCnt(pr.id, val)}
                       key={i + ':' + productInfo.rest}
               />
            </td>
            <td>{productInfo.price * pr.cnt}</td>
            <td>
               <Button variant="danger"
                       onClick={() => cartStore.remove(pr.id)}
               >X</Button>
            </td>
         </tr>
      });

      return <div>
         <h2>Cart</h2>
         <table>
            <tbody>
               <tr>
                  <td>Title</td>
                  <td>Price</td>
                  <td>Count</td>
                  <td>Total</td>
                  <td>Actions</td>
               </tr>
               { productsRows }
            </tbody> 
         </table>
         <hr/>
         <strong>Total: {cartStore.total}</strong>
         <hr/>
         <Link className="btn btn-success" to={routesMap.order}>Send</Link>
      </div>
   }   
}

export default withStore(Cart);