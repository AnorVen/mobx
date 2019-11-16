import AppProducts from '~/components/products/list';
import AppProduct from '~/components/products/item';
import AppCart from '~/components/cart';
import AppOrder from '~/components/order';
import AppResult from '~/components/result';
import AppError404 from '~/components/errors/404';

const routes = [
   {
      name: 'home',
      path: '/',
      component: AppProducts,
      exact: true
   },
   {
      name: 'product',
      path: '/product/:id',
      component: AppProduct,
      exact: true
   },
   {
      name: 'cart',
      path: '/cart',
      component: AppCart,
      exact: true
   },
   {
      name: 'order',
      path: '/order',
      component: AppOrder,
      exact: true
   },
   {
      name: 'result',
      path: '/result',
      component: AppResult,
      exact: true
   },
   {
      path: '**',
      component: AppError404
   }
];

const routesMap = {};

routes.forEach((route) => {
   if(route.hasOwnProperty('name')){
      routesMap[route.name] = route.path;
   }
});

// urlBuilder('post', {num: 1})
// urlBuilder('product', {id: 100})
function urlBuilder(name, params = []){
   return url;
}

export { routes, routesMap, urlBuilder }