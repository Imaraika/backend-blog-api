import coments from '../models/commentsCollection';
import { v4 as uuidv4 } from 'uuid';


export const getAll = (req, res) => {
    if (!coments) {
        return res.status(404).json({
            status: 404,
            error: 'No coments found',
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'coments successfully retrieved',
        data: {
            coments,
        },
    });
};
export const getComentById = (req, res) => {
    const id = req.params.id;
    const coment = coments.filter((coment) => {
        return coment.id === id;
    });
    if (coment[0]) {
        return res.status(200).json({
            status: 200,
            message: 'coment successfully retrieved',
            data: coment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'coment not found',
    });

};
export const createComent = (req, res) => {
    const coment = {
        id: uuidv4(),
        name: req.body.name,
        comentMsg: req.body.comentMsg,
    };
    coments.push(coment);
    return res.status(201).json({
        status: 201,
        message: 'coment successfully created',
        data: coment,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const coment = coments.filter((coment) => {
        return coment.id === id;
    });
    if(coment[0]){
        coment[0].name=req.body.name;
        coment[0].comentMsg= req.body.comentMsg;
        return res.status(200).json({
            status: 200,
            message: 'coment successfully updated',
            data: coment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'coment not found',
    });
    
}

export const deleteComent=(req,res)=>{
    const id=req.params.id;
    const coment = coments.filter((coment) => {
        return coment.id === id;
    });
    if(coment[0]){
        var a = coments.indexOf(coment[0]);
        coments.splice(a, 1);
        return res.status(200).json({
            status: 200,
            message: 'coment successfully deleted',
            data: coment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'coment not found',
    });
}