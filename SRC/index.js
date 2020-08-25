
import express from 'express';
import UsaRoute from './routes/usersRoute';
import MessRoute from './routes/messagesRoute';
import posRoute from './routes/postsRoute.js';
import commentiRoute from './routes/commentsRoute';
import authRoute from './routes/authRoutes';
import bodyParser from 'body-parser';
import routes from './routesTesting/post.routes.test';
import routeMsgTst from './routesTesting/message.routes.test';
import routeCmtTst from './routesTesting/comments.routes.test';


const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/',routeMsgTst);
app.use('/', routeCmtTst);
//PORT
const port = process.env.PORT || 90;
app.listen(port, () => console.log(`listening on port ${port}...`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome To Backend-blog-api Project ' }));
app.use('/',UsaRoute);
app.use('/',MessRoute);
app.use('/',posRoute);
app.use('/',commentiRoute);
app.use('/',authRoute);
export default app;