
import express from 'express';
import ProductController from './src/controllers/products.controller.js';
import ValidateData from './src/MiddleWare/validation.middleware.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts'

const server = express();

server.use(express.urlencoded({extended:true}))

server.set('view engine','ejs')
server.set('views',path.join(path.resolve(),'src','views'))

server.use(ejsLayouts);

const productController = new ProductController;
server.get('/', productController.getProducts)

server.get('/new',productController.getAddForm);
server.get('/update-product/:id',productController.getUpdateProductView);
server.get('/delete-product/:id',productController.removeProduct);

server.post('/update-product',ValidateData,productController.updateProduct);
server.post('/',ValidateData, productController.addNewForm)

server.use(express.static('src/views'));

server.listen(3400
        ,()=>{
            console.log('Server is listening');
}
)