import { favCmts } from '../models/favcomments.collection';

const getAllcmts = (req, res) => {
    return res.status(200).json({
    status: 'success',
    // movies:'favMovies',
    // data: favCmts
    comments: favCmts
    });
};
export default getAllcmts ;