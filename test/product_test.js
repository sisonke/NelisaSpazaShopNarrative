var assert = require("assert");

var productList = require("../productList");
var products = require("../mostSolditems");

describe("Find data in file", function(){

    it('should return a unique list of product in the file synchronously', function(){

        var productLines = productList.linesInFiles('./files/Nelisa Sales History.csv');
        assert.deepEqual(productLines, ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"]);
   });

});


    it('should return the total number of items sold for each product', function(){

        //var productLines = products.productList(); 

        var theFileName = './files/Nelisa Sales History.csv';

        var productsSoldMap = products.productsSold(theFileName);
        
        console.log("*************");
        console.log(productsSoldMap);
        console.log("*************");

        assert.equal(142, productsSoldMap['Milk 1l']);
        assert.equal(125, productsSoldMap['Imasi']);
        assert.equal(130, productsSoldMap['Bread']);
        assert.equal(94, productsSoldMap['Chakalaka Can']);
        assert.equal(86, productsSoldMap['Gold Dish Vegetable Curry Can']);
        assert.equal(94, productsSoldMap['Fanta 500ml']);
        assert.equal(159, productsSoldMap['Coke 500ml']);
        assert.equal(75, productsSoldMap['Cream Soda 500ml']);
        assert.equal(47, productsSoldMap['Iwisa Pap 5kg']);
        assert.equal(98, productsSoldMap['Top Class Soy Mince']);
        assert.equal(26, productsSoldMap['Shampoo 1 litre']);
        assert.equal(50, productsSoldMap['Soap Bar']);
        assert.equal(114, productsSoldMap['Bananas - loose']);
        assert.equal(114, productsSoldMap['Apples - loose']);
        assert.equal(172, productsSoldMap['Mixed Sweets 5s']);
        assert.equal(20, productsSoldMap['Heart Chocolates']);
        assert.equal(14, productsSoldMap['Rose (plastic)'])
        assert.equal(14, productsSoldMap['Valentine Cards']);


    });

  it('should return the mostSolditems', function(){
     var soldProduct = require('../SoldProduct');

     var mostpopular = soldProduct.popularProduct('./files/Nelisa Sales History.csv');
     var expectedMap = {name: 'Mixed Sweets 5s',amount: 172};

       assert.deepEqual(expectedMap,mostpopular);

        //console.log(SoldProduct);

  });