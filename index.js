import express from 'express'
import {listRoutes} from "./routers/index.js";
import {notFoundPage} from "./middleware/index.js";

const app = express()


app.use('/list',listRoutes)

app.use(notFoundPage)

const PORT=3000

app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})