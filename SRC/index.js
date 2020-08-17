
import express from 'express';
import UsaRoute from './routes/usersRoute';
import MessRoute from './routes/messagesRoute';
const app = express();
//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome ' }));
app.use('/',UsaRoute);
app.use('/',MessRoute);
export default app;