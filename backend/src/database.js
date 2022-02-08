const mongoose = require('mongoose')

//cadena de configuración

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : "mongodb://localhost/dbtest"

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Conexión a la base de datos correcta", URI);
})