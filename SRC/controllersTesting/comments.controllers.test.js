import { favCmts } from '../models/favcomments.collection';

const getAllcmts = (req, res) => {
    return res.status(200).json({
    status: 'success',
    comments: favCmts
    });
};
export default getAllcmts ;