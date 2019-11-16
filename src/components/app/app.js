import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { routes, routesMap } from '~/router';
import cartStore from '~/store/cart';
import { observer } from 'mobx-react';

@observer class App extends React.Component{
   render(){
      let routesItems = routes.map((route) => {
         return <Route 
                  key={route.path}
                  path={route.path} 
                  component={route.component}
                  exact={route.exact}
               />
      });
      
      return <BrowserRouter>
         <div className="container">
            header
            {cartStore.total}
            <hr/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col col-3">
                  <ul className="list-group">
                     <li className="list-group-item">
                        <Link to={routesMap.home}>Home</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to={routesMap.cart}>Cart</Link>
                     </li>
                     <li className="list-group-item">
                        <Link to={routesMap.order}>Order now</Link>
                     </li>
                  </ul>
               </div>
               <div className="col col-9">
                  <Switch>
                     {routesItems}
                  </Switch>
               </div>
            </div>
         </div>
      </BrowserRouter>
   }
}

export default App;