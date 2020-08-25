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
                console.log(res.body);
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                // expect(res.body.status).to.deep.equals('success');
                expect(res.body).to.be.an('array');
                done();
            });
        });
    });
});