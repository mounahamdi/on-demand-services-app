var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost', //127.0.0.1
    user: 'root',
    password: 'root',
    database: 'techniciandb'
})

const getAllTechicians = (callback) => {
    let sqlQuery = `SELECT * FROM technicians`
    connection.query(sqlQuery, (result, error) => callback(result, error))
}

const searchTechicians = (city, service, callback) => {
    let sqlQuery = `SELECT service,city,userName,phone FROM technicians WHERE city=? and service=?`
    connection.query(sqlQuery, [city, service], (result, error) => callback(result, error))
}

const signUp = (userName, password, city, service, phone, callback) => {
    let sqlQuery = `INSERT INTO technicians (userName,password,city,service,phone) VALUES (?,?,?,?,?)`
    connection.query(sqlQuery, [userName, password, city, service, phone], (result, error) => callback(result, error))
}

const getHashedPassword = (userName, callback) => {
    let sqlQuery = `SELECT password FROM technicians WHERE userName=?`
    connection.query(sqlQuery, [userName], (result, error) => callback(result, error))
};

const logIn = (userName, password, callback) => {
    let sqlQuery = `SELECT * FROM technicians WHERE userName=? and password=?`
    connection.query(sqlQuery, [userName, password], (result, error) => callback(result, error))
}

const updatePhone = (id, newPhone, callback) => {
    let sqlQuery = `UPDATE technicians SET phone=? WHERE id=${id}`
    connection.query(sqlQuery, [newPhone], (result, error) => callback(result, error))
}

const updatePassword = (id, newPassword, confirmPassword, callback) => {
    let sqlQuery = `UPDATE technicians SET password=? WHERE id=${id}`
    connection.query(sqlQuery, [newPassword, confirmPassword], (result, error) => callback(result, error))
}

const deleteTechnicianAccount = (id, callback) => {
    let sqlQuery = `DELETE FROM technicians WHERE id=${id}`
    connection.query(sqlQuery, (result, error) => callback(result, error))
}

module.exports = {
    getAllTechicians,
    searchTechicians,
    signUp,
    getHashedPassword,
    updatePhone,
    updatePassword,
    logIn,
    deleteTechnicianAccount
}