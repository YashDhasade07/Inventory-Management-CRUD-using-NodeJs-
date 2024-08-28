import path from 'path'
import ProductModel from '../models/products.model.js';
import { error } from 'console';

export default class ProductController{

    getProducts(req,res){
        let products =ProductModel.get();
        res.render('products',{products})
        // console.log(products);
        // return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }

    getAddForm(req,res){
        res.render('new-product',{errorMessage: null})
        // res.render('new-product',{error:[]})
    }

    addNewForm(req,res){
        ProductModel.add(req.body)
        let products =ProductModel.get();
        res.render('products',{products})
    }
    updateProduct(req,res){
        ProductModel.update(req.body);
        let products =ProductModel.get();
        res.render('products',{products})
    }
    removeProduct(req,res){
        let id = req.params.id;
        const isProduct = ProductModel.getById(id);
        if(!isProduct){
           return res.status(401).send('Product not found')
        }
        ProductModel.delete(id);
        
        let products =ProductModel.get();
        res.render('products',{products})
    }

    getUpdateProductView(req,res,next){
        let id = req.params.id;
        const isProduct = ProductModel.getById(id);
        if(isProduct){
            res.render('update-product',{product: isProduct,errorMessage: null})
        }else{
            res.status(401).send('Product not found')
        }
    }
}