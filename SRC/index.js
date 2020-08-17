import express from 'express';
const app = express();
app.get('/', function (req, res) {
  res.send('Welcome Ange')
});
app.listen(9000,function(){
    console.log('app is listening on port 9000');
});
// function sayHello(name){
// console.log('HEllo ' + name);
// }
// sayHello('ange')
//     // console.log(window)
