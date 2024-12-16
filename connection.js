//import mongoos
const mongoose = require('mongoose')


const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB connct succefully');
}).catch((err)=>{
    console.log(`connection failed due to ${err}`);
})
