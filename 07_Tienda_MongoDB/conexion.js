const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tienda_online',{
   // useNewUrlParser:true,
    //useUnifiedTopology:true,
})
.then(()=>console.log('CONECTADO'))
.catch(err=>console.error(err));


const ProductSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
});


const Product=mongoose.model('Product',ProductSchema);

const newProduct=Product({
    nombre:'Control',
    precio:120,
    desc:"control remoto",
});

newProduct.save()
.then(product=>console.log(product))
.catch(err=>console.error(err));

const mostrarProducto= async()=>{
    try{
        const productos= await Product.find();
        console.log('Stock:',productos);
    }catch(err){
        console.err('ERROR AL BUSCAR PRODUCTOS EN STOCK:',err);
    }
};

mostrarProducto();