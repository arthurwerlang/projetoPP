const connection = require('../config/db');
const dotenv = require('dotenv').config();
async function storedados(req, res){
 
    const params = Array(
        req.body.localização,
        req.body.lixos ,
        req.body.numero
    );
 
    console.log(req.body)
 
    const query = "INSERT INTO usuarios(localização,lixos,numero) VALUES(?, ?, ?)";
 
    connection.query(query, params, (err, results) => {
        if(results){
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucess",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Error",
                    sql: err
                })
        }
    })
}
 
module.exports = {
    storedados
}