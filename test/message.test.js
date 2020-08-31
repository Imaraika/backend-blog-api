import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from "../SRC/index";
const { expect } = chai;


chai.use(chaihttp);
describe('Message',() =>{
    describe('GET /messages', () =>{
        it('should return an array of the all Messages', (done) =>{
            chai.request(app)
            .get('/message')
            .end((err, res) => {
                if(err) done(err);
                // console.log(res.body);
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                // expect(res.body.status).to.deep.equals('success');
                expect(res.body).to.be.an('array');
                done();
            });
        });
    });
});
describe('When the user create a message --api/message', () => {
    it('should return message created successfully', (done) => {
   chai
     .request(app)
     .post('/message')
     .send({
        email: 'ange@gmail.com',
		name: 'Ange',
		msg: 'Hello, well done',
		date: new Date(),
     })
     .end((err, res) => {
       expect(res.body).to.be.an('object');
       expect(res.body.message).to.equal('Message successfully sent');
       expect(res).to.have.status(201);
       expect(res.body).to.have.property('status');
       expect(res.body).to.have.property('message');
       expect(res.body).to.have.property('data');
       done();
     });
 });

});