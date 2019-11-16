import { observable, computed, action } from 'mobx';
import productsStore from '~/store/products';

class Cart{
   @observable products = [];

   @computed get total(){
      return this.products.reduce((t, pr) => {
         let productInfo = productsStore.getById(pr.id);
         return t + productInfo.price * pr.cnt;
      }, 0);
   }

   @action add(id){
      this.products.push({id, cnt: 1});
   }

   @action changeCnt(id, cnt){
      let ind = this.getIndexById(id);
      // check if exists
      this.products[ind].cnt = cnt;
   }

   @action remove(id){
      let ind = this.getIndexById(id);
      // check if exists
      this.products.splice(ind, 1);
   }

   getIndexById(id){
      return this.products.findIndex(pr => pr.id === id);
   }
}

export default new Cart();