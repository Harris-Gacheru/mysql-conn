import express from 'express';
import router from './routes/user.routes';

const app = express()

app.use(express.json())
app.use('/mysql', router)

const PORT = process.env.PORT || 4500

app.listen(PORT, () => console.log(`App running on port ${PORT}`))