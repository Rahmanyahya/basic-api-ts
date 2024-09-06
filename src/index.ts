import Express  from "express";
import Shape from "./router/bangunDatar.router"
import Geometry from './router/bangunRuang.router'
const app = Express() 
const port = 3000

app.use(Express.json())
app.use('/shape', Shape)
app.use('/geometri', Geometry )
app.listen(port, () => {console.log(`Runing on port ${port} http://localhost:${port}`)})

