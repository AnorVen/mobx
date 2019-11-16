import React from 'react';
import { observable, computed, action } from 'mobx';

class Order{
   @observable formData = [
      {
         name: 'name',
         label: 'Name',
         value: '',
         errorMessage: "Enter correct name",
         valid: null,
         validator: (val) => /^[aA-zZ]{2,30}$/.test(val)
      },
      {
         name: 'email',
         label: 'Email',
         value: '',
         errorMessage: "Enter correct email",
         valid: null,
         validator: (val) => /^[aA-zZ]+@[aA-zZ]+$/.test(val)
      },
      {
         name: 'phone',
         label: 'Phone',
         value: '',
         errorMessage: "Enter correct phone",
         valid: null,
         validator: (val) => /^[0-9]{7,13}$/.test(val)
      }
   ];
   
   @computed get isValid(){
      return this.formData.every(field => field.valid);
   }

   @computed get userInfo(){
      let info = {};

      this.formData.forEach((field) => {
         info[field.name] = field.value;
      });

      return info;
   }

   @action change(ind, value){
      let field = this.formData[ind];
      field.value = value;
      field.valid = field.validator(field.value);
   }
}

export default new Order();