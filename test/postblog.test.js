import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from '../SRC/index';

const { expect } = chai;

chai.use(chaihttp);
describe('post',() =>{
    describe('GET /post', () =>{
        it('should return an array of the all Posts', (done) =>{
            chai.request(app)
            .get('/post')
            .end((err, res) => {
                if(err) done(err);
                // console.log(res.body);
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                expect(res.body.status).to.deep.equals('success');
                expect(res.body.data).to.be.an('array');
                done();
            });

            
        });
    });
});