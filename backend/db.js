const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FastFood:FastFood@cluster0.fz4vvzo.mongodb.net/FastFoodmern?retryWrites=true&w=majority'
const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true },async(err,result)=>{
        if(err)console.log("....",err)
        else{
            console.log("connected");
            const fetched_data= await mongoose.connection.db.collection("food_item");
            fetched_data.find({}).toArray( async function( err, data){
                const foodcategory = await mongoose.connection.db.collection("foodcategory");
                foodcategory.find({}).toArray(function (err, catData){
                    if(err) console.log(err);
                    else{
                    global.food_item =  data;
                   global.foodcategory =  catData;
                    }
                })
               // if(err)console.log(err);
               // else {
                  //  global.food_item = data;
                    
               // }
            })
    }
        
    });

}


   module.exports= mongoDB;
     



  