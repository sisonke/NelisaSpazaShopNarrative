
    it('should return the most popular product', function(){

        var products = new Products();
        
        // ?????    
        var lists = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 }
 	this.mostPopularProduct = function(itemMap){
 		var mostPopularProduct = {};
 		var max = 0;
 		for(var prop in itemMap) {
 			var value = itemMap[prop];
 			if(itemMap[prop] > max){
 				max = itemMap[prop];
 				mostPopularProduct = {
 					name: prop,
 					qty: max
 				}
 			}
 		}
       return mostPopularProduct;
   };