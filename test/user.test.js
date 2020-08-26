import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from "../SRC/index";

const { expect } = chai;

chai.use(chaihttp);
describe('Posts',() =>{
    describe('GET /users', () =>{
        it('should return an array of the all users', (done) =>{
            chai.request(app)
            .get('/users')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.have.status(200);
                
                expect(res).to.be.an('object');
                expect(res.body.status).to.deep.equals('success');
                expect(res.body.usersdata).to.be.an('array');
                done();

            });
        });
    });
});