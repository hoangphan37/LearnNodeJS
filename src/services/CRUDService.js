const connection = require('../config/database')

const getAllUsers = async()=>{
    let [results, fielts]=await connection.query('select * from User');
    return results;
}

module.exports ={
    getAllUsers,
}