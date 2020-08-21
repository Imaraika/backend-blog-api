import { v4 as uuidv4 } from 'uuid';

var coments = [{
    name:'ange',
    comentMsg:'well done, and try to improve your UI to look good'
},
{
    name:'ange',
    comentMsg:'well done, and try to improve your UI to look good'
},
];
coments = coments.map((coment)=>({id:uuidv4(), ...coment}));
export default coments;