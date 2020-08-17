// import comments from '../models/commentsCollection';
// import { v4 as uuidv4 } from 'uuid';


//  const getAllComments = (req, res) => {
//      res.send(comments);
// };
//  const getCommentById = (req, res) => {
//     const id = req.params.id;
//     const commenti = comments.filter((commenti) => commenti.id === id );
//         res.send(commenti);

// };
//  const createComment = (req, res) => {
//     const comment = {
//         id: uuidv4(),
//         fullname: req.body.fullname,
//         commentMsg: req.body.commentMsg
//     };
//     comments.push(comment);
//     res.send(comments);
// };

//  const update=(req,res)=>{
//     const id = req.params.id;
//     const comment = comments.filter((comment) => {
//         return comment.id === id;
//     });
//   const deleteComment=(req,res)=>{
//     const id=req.params.id;
//     const commentCheck = comments.filter((commenticheck) => commenticheck.id ===id);
//     comments.splice(comments.indexOf(commenticheck), 1);
//     res.send(comments);
// };
// exports = {getAllComments,getCommentById,createComment,deleteComment};
// }