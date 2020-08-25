import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from "../SRC/index";
const { expect } = chai;


chai.use(chaihttp);
describe('Comment',() =>{
    describe('GET /comments', () =>{
        it('should return an array of the all Comments', (done) =>{
            chai.request(app)
            .get('/comments')
            .end((err, res) => {
                if(err) done(err);
                console.log(res.body);
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                expect(res.body.status).to.deep.equals('success');
                expect(res.body.comments).to.be.an('array');
                done();
            });
        });
    });
});