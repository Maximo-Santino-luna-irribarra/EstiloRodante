//import
import express from 'express';
import usersRoutes from '../routes/user.route.js'

//settings
const app = express();
app.set("PORT", 5000);

//middlewares
app.use(express.json())

// routes
app.use('/api/users', usersRoutes)


//listener
app.listen(app.get("PORT"), ()=>
    console.log(`Server corriendo en localhost:${app.get("PORT")}`)
)