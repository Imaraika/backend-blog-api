import { favMsg } from '../models/favmessage.collection';

const getAllMsg = (req, res) => {
    return res.status(200).json({
    status: 'success',
    dataMsg: favMsg
    });
};
export default getAllMsg ;