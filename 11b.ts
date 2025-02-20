class Product { 
    productname:string; 
    productid:number; 
    price:number; 
constructor(productname:string,productid:number,price:number) 
{ 
    this.productname=productname; 
    this.productid=productid; 
    this.price=price; 
} 
} 
let product1 = new Product("Mobile",1,15000); 
let product2 = new Product("Laptop",2,20000); 
let proList: Product[] = [product1, product2]; 
console.log(proList); 