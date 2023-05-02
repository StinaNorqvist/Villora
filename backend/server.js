const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')

const connection = require('./connection')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static('public'))
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/house', async(req, res) => {
    let sql = "SELECT * FROM house"
    try{
        await connection.query(sql, function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            res.json(results)
        })
    }catch(error){
        return res.status(500).json({
            error: error.message
        })
    }
})

app.get('/api/house/:id', async(req, res) => {
    let sql = "SELECT * FROM bok WHERE bokId = ?"
    try{
        await connection.query(sql,[req.params.id], function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            res.json(results)
        })
    }catch(error){
        return res.status(500).json({
            error: error.message
        })
    }
})

app.post('/api/books', async(req, res) => {
    let sql ='INSERT INTO bok (bokTitel, bokForfattare, bokIsbn, bokPris, bokKategoriId) VALUES (?,?,?,?,?)'
    let params =[req.body.bokTitel, req.body.bokForfattare, req.body.bokIsbn, req.body.bokPris, req.body.bokKategoriId]

    try{
        await connection.query(sql, params, function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            return res.status(201).json({
                success: true,
                error: '',
                message: 'Du har lagt till en ny bok!'
            })
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        })
    }
})

app.put('/api/books', async(req, res) => {
    let sql ='UPDATE bok SET bokTitel = ?, bokForfattare = ?, bokIsbn = ?, bokPris = ? WHERE bokId = ?'
    let params =[req.body.bokTitel, req.body.bokForfattare, req.body.bokIsbn, req.body.bokPris, req.body.bokId]

    try{
        await connection.query(sql, params, function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            return res.status(201).json({
                success: true,
                error: ''
            })
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        })
    }
})

app.delete('/api/books', async(req, res) => {
    console.log(req.body)
    let sql = 'DELETE FROM bok WHERE bokId = ?'

    try{
        await connection.query(sql, [req.body.bokId], function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            return res.status(201).json({
                success: true,
                error: '',
                message: 'Boken är nu raderad!'
            })
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        })
    }
})

app.get('/api/books-categories', async(req, res) => {
    let sql = "SELECT * FROM kategori INNER JOIN bok ON kategori.kategoriId = bok.bokKategoriId"

    try{
        await connection.query(sql, function (error, results, fields) {
            if (error) {
                if (error) throw error
            }
            res.json(results)
        })
    }catch(error){
        return res.status(500).json({
            error: error.message
        })
    }
})

