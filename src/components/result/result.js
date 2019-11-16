import React from 'react';
import { observer } from 'mobx-react';
import cartStore from '~/store/cart';
import orderStore from '~/store/order';
import { Link } from 'react-router-dom';

@observer class Result extends React.Component{
   render(){
      return <div>
         <h2>Hi, {orderStore.userInfo.name}!</h2>
         <hr/>
         We get your money all! - {cartStore.total}
      </div>
   }
   
}

export default Result;