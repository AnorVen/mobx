export { all };

function all(){
   return new Promise(function(resolve){
      setTimeout(function(){
         resolve([
            {
               id: 100,
               title: 'Ipnone 200',
               price: 12000,
               rest: 10,
               current: 1
            },
            {
               id: 101,
               title: 'Samsung AAZ8',
               price: 22000,
               rest: 5,
               current: 1
            },
            {
               id: 103,
               title: 'Nokia 3310',
               price: 5000,
               rest: 2,
               current: 1
            },
            {
               id: 105,
               title: 'Huawei ZZ',
               price: 15000,
               rest: 8,
               current: 1
            }
         ]);
      }, 200);
   })
   
}