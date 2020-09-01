import { favPosts } from '../models/favposts.collection';

const getAllPosts = (req, res) => {
    return res.status(200).json({
    status: 'success',
    data: favPosts
    });
};
export default getAllPosts ;