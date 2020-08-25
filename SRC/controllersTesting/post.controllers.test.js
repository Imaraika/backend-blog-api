import { favPosts } from '../models/postsCollection';

const getAllPostsforTest = (req, res) => {
    return res.status(200).json({
    status: 'success',
    data: favPosts
    });
};
export default getAllPostsforTest ;