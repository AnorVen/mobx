import { observable, computed, action } from 'mobx';

class Products{
   @observable items = loadProducts();
   
   @computed get getById(){
      return function(id){
         let ind = this.items.findIndex(pr => pr.id === id);
         return ind in this.items ? this.items[ind] : null;
      }
   }

   @action load(){
      // api
      // then items = some...
   }

}

export default new Products();

function loadProducts(){
   return [
      {
         id: 100,
         title: 'Ipnone 200',
         price: 12000,
         rest: 10
      },
      {
         id: 101,
         title: 'Samsung AAZ8',
         price: 22000,
         rest: 5
      },
      {
         id: 103,
         title: 'Nokia 3310',
         price: 5000,
         rest: 2
      },
      {
         id: 105,
         title: 'Huawei ZZ',
         price: 15000,
         rest: 8
      }
   ];
}