const houses = [
    { id: 1,
      sqFt: 300,
      price: 100000,
      houseAddress: "1212 Someplace Way",
      forSale: true,
      beds: 1,
      baths: 1 },
    { id: 2,
      sqFt: 400,
      price: 150000,
      houseAddress: "412 Large Rd",
      forSale: false,
      beds: 2,
      baths: 2 },
    { id: 3,
      sqFt: 550,
      price: 75000,
      houseAddress: "611 Vacanct Rd",
      forSale: true,
      beds: 2,
      baths: 3 },
      { id: 4,
      sqFt: 450,
      price: 60000,
      houseAddress: "1 Here Rd",
      forSale: true,
      beds: 3,
      baths: 1 }
  ];
  
  module.exports = {
     getAll: function() {
       return houses;
     },
  
    getOne: function (id) {
      return houses.find((houses) => houses.id === parseInt(id));
    }
   };