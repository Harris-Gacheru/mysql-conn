import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.controller';

const router = express.Router()

router.get('/', (req, res) => res.send('Users route working...'))
router.post('/add', createUser)
router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router