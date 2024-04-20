const express = require('express')
const router =express.Router()



const db = require('../db')
const app  =express()
app.use(express.json())


router.post('/insertblog',(request,response) =>{
    const query = `insert into blogs (title, contents ,user_id, category_id ) values(?,?,?,?);`

    const connection = db.openConnection()

    connection.execute(
        query,
        [
            request.body.title,
            request.body.contents,
            request.body.user_id,
            request.body.category_id
        ],
        (error,result) =>{
            if (error){
                console.log(`error:`,error)
            }

            connection.end()
            //response.send('inserted a record')
            response.send({status:"Success",data:result})
        }
    )
})

router.get('/allblogs',(request,response) =>{
    const query = `select id , title , category  from blogs;`

    const connection = db.openConnection()

    connection.execute(
        query,
        (error,blogs) =>{
            if (error){
                console.log(`error:`,error)
            }

            connection.end()
            response.send(blogs)
        }
    )
})

module.exports = router
