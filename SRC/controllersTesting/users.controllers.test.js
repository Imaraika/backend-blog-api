import { favUsers } from '../models/favusers.collection';


const getAllUsers = (req, res) => {
    return res.status(200).json({
    status: 'success',
    usersdata: favUsers
    });
};
export default getAllUsers;

export const createUser = (req, res) =>{
    return res.status(200).json({
        status:'success',
        usersPostdata: favUsers

    });
};
// export default createUser;