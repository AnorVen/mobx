import React from 'react';
import { observer } from 'mobx-react';

import cart from '~/store/cart';
import products from '~/store/products';
import order from '~/store/order';

let stores = {
	cart,
	products,
	order
};

export default function(Component){
	let ObservedComponent = observer(Component);
	
	return function(props){
		return <ObservedComponent {...props} stores={stores} />
	};
}
