export default function ValidateData(req,res,next){
    const {name,price,imageUrl} =req.body;
        let errors =[];
        if(!name || name.trim()==''){
            errors.push('Enter the Name')
        }

        if(!price || parseFloat(price) < 1){
            errors.push('Price cannot be negative');
        }

        try {
            let Url = new URL(imageUrl)
        } catch (err) { 
            errors.push('Enter the valid URL')
        }

        if (errors.length>0){
            res.render('new-product',{errorMessage : errors[0]});
        }else{
            next()
        }

        
}