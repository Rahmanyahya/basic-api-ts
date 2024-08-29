import Express  from "express";
import Shape from "./router/bangunDatar.router"
const app = Express() 
const port = 3000

app.use('/shape', Shape)
app.listen(port, () => {console.log(`Runing on port ${port} http://localhost:${port}`)})

