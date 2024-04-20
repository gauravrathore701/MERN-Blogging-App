const express = require('express')
const router =express.Router()



const db = require('../db')
const app  =express()
app.use(express.json())


router.post('/registeruser',(request,response) =>{
    const query = `insert into user (email , password , full_name , phone_no) values(?,?,?,?);`

    const connection = db.openConnection()

    connection.execute(
        query,
        [
            request.body.email,
            request.body.password,
            request.body.full_name,
            request.body.phone_no 
        ],
        (error,result) =>{
            if (error){
                console.log(`error:`,error)
            }

            connection.end()
            console.log('inserted a record')
            response.send({status:"Success",data:result})
        }
    )
})


router.post('/login', (request, response) => {
    const { email, password } = request.body
    const query = `select  full_name,email,phone_no,isDeleted from user where email = ? and password = ? ;`

    const res = db.pool.execute(query,[email, password],(err, result)=>{
        response.send(result)
    });
})

module.exports = router
