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
describe('When the user create a comments --api/comment', () => {
    it('should return comment created successfully', (done) => {
   chai
     .request(app)
     .post('/coment')
     .send({
        name:'ange',
        comentMsg:'well done, and try to improve your UI to look good'
     })
     .end((err, res) => {
       expect(res.body).to.be.an('object');
       expect(res.body.message).to.equal('coment successfully created');
       expect(res).to.have.status(201);
       expect(res.body).to.have.property('status');
       expect(res.body).to.have.property('message');
       expect(res.body).to.have.property('data');
       done();
     });
 });

});