


export default class ProductModel{
    constructor(id,name,description,price,imageUrl){
        this.id =id;
        this.name =name;
        this.description =description;
        this.price =price;
        this.imageUrl =imageUrl;
    }

    static get(){
        return products;
    }

    static add(ProductOBJ){
        let product = new ProductModel(products.length+1,ProductOBJ.name,ProductOBJ.desc,ProductOBJ.price,ProductOBJ.imageUrl);
        
        products.push(product)
    }
    static delete(id){
        
     let index = products.findIndex(item=> item.id == id)
        
        products.splice(index,1)
    }
    static update(ProductOBJ){
      let product = new ProductModel(ProductOBJ.id,ProductOBJ.name,ProductOBJ.desc,ProductOBJ.price,ProductOBJ.imageUrl);
        for(let i =0; i<products.length;i++){
        if(products[i].id == ProductOBJ.id){
              console.log(products[i]);
              products[i] = product
            }
      }

    }
    
    static getById(id){
     return products.find((p) => p.id == id)
    }
}




var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for Product 1',
    19.99,
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  ),
  new ProductModel(
    2,
    'Product 2',
    'Description for Product 2',
    29.99,
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
  ),
  new ProductModel(
    3,
    'Product 3',
    'Description for Product 3',
    39.99,
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
  ),
]