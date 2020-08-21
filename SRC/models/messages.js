import { v4 as uuidv4 } from 'uuid';

var messg = [
	{
		email: 'ange@gmail.com',
		name: 'Ange',
		msg: 'Hello, well done',
		date: new Date(),
	},
	{
		email: 'benimana@gmail.com',
		name: 'benimena',
		msg: 'great work',
		date: new Date(),
	},
	{
		email: 'koko10@gmail.com',
		name: 'koko lolo',
		msg: 'Hello there',
		date: new Date(),
	},
];
messg = messg.map((msg) => ({ id: uuidv4(), ...msg }));

export default messg;