import { favUsers } from '../models/favusers.collection';

const getAllUsers = (req, res) => {
    return res.status(200).json({
    status: 'success',
    // movies:'favMovies',
    usersdata: favUsers
    });
};
export default getAllUsers;