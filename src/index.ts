import express from 'express'

const app = express()
const port = 3005

app.listen(port, () => {
    return console.log(`Connected to port:${port}`);
})