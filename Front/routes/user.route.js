import {Router} from 'express';

const users = []

const router = Router()

router.get('/', (req, res) =>{
    res.status(200).json(users)
})

router.post('/', (req, res)=>{
    const user = req.body;
    
    const newUser = {
        id: crypto.randomUUID(),
        name: user.name,
        email: user.email,
    }
    users.push(newUser)
    res.status(201).json(newUser)
})





export default router