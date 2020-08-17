
import express from 'express';
import UsaRoute from './routes/usersRoute';
import MessRoute from './routes/messagesRoute';
import posRoute from './routes/postsRoute.js';
// import commentiRoute from './routes/commentsRoute';


const app = express();
//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome ' }));
app.use('/',UsaRoute);
app.use('/',MessRoute);
app.use('/',posRoute);
// app.use('/',commentiRoute);
export default app;