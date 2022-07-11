const mongoose = require('mongoose');

const connectTOMongo = ()=>{
        mongoose.connect("mongodb+srv://Soumallya:C6kaIYOW2aJvhJPP@cluster0.ai6xx.mongodb.net/cowin?retryWrites=true&w=majority", { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', (error) => console.error(`Error: ${error}`));
    db.once('open', () => console.log(`DetaBase connected!`));
}

module.exports = connectTOMongo;
