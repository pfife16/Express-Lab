const apts = [
    { id: 1,
      sqFt: 100,
      price: 500,
      aptAddress: "123 World Rd",
      vacancy: true },
    { id: 2,
      sqFt: 90,
      price: 1000,
      aptAddress: "456 Group Rd",
      vacancy: false },
    { id: 3,
      sqFt: 120,
      price: 750,
      aptAddress: "11 Wrong Rd",
      vacancy: true },
      { id: 4,
      sqFt: 70,
      price: 600,
      aptAddress: "22 Right Rd",
      vacancy: true }
  ];
  
  module.exports = {
     getAll: function() {
       return apts;
     },
  
    getOne: function (id) {
      return apts.find((apts) => apts.id === parseInt(id));
    }
   };