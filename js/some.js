class Product {

    constructor(id, price, withDiscount = null)
   {
     if(withDiscount)
     {
      this.id = id
      this.withDiscount = price - (price/100 * withDiscount)
      this.price = price;
     }
     else {
      this.id = id
      this.price = price  
     }
    
   }
  setPrice(price)
   {
     this.price = price;
     return this;
   }
 
   get getPrice()
   {
     
     return this.price;
   }
   withDiscount(withDiscount)
   {
     let newId = this.id
     let newProduct = new Product(++newId, this.price, withDiscount);
     return newProduct;
   }
 }
 class Shop {
     constructor(products)
     {
         this.products = products;
     }
     
     getProduct(index)
     {
         for(let i = 0; i < this.products.length; i++)
         {
             if(i === index)
             {
                 return this.products[i];
             }
         }
     }
     
     addProduct(product)
     {
         this.products.push(product);
     }
     
 }
 let someProduct = [new Product(1,1000), new Product(2,2000)];
 let someShop = new Shop(someProduct);
 console.log(someShop.getProduct(1).setPrice(3224).withDiscount(10).withDiscount === 2901.6)