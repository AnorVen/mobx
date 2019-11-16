import React from 'react';
import PropTypes from 'prop-types';
import cartStore from '~/store/cart';
import orderStore from '~/store/order';
import {Form, Button, Modal} from 'react-bootstrap';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { routesMap } from '~/router';

@observer class Order extends React.Component{
   state = {
      showModal: false
   }

   show = () => this.setState({showModal: true});
   hide = () => this.setState({showModal: false});

   render(){
      let formFields = orderStore.formData.map((field, i) => {
         return <Form.Group key={field.name}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control 
               type="text" 
               value={field.value}
               onChange={(e) => orderStore.change(i, e.target.value)}
            />
            {field.valid === null || field.valid ? '' : 
               <Form.Text className="text-muted">
                  {field.errorMessage}
               </Form.Text>
            }
         </Form.Group>
      });

      return <div>
         <h2>Order</h2>
         <Form>
            {formFields}
         </Form>
         <hr/>
         <Link className="btn btn-warning" to={routesMap.cart}>
            Back to cart
         </Link>
         <Button variant="success" onClick={this.show} disabled={!orderStore.isValid}>
            Send
         </Button>
         <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
            <Modal.Header closeButton>
               <Modal.Title>Check information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <strong>Total: {cartStore.total}</strong>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={this.hide}>
                  Ooops
               </Button>
               <Link className="btn btn-success" to={routesMap.result}>
                  All right
               </Link>
            </Modal.Footer>
         </Modal>
      </div>
   }
}

export default Order;