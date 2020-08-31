import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from "../SRC/index";

const { expect } = chai;

chai.use(chaihttp);
describe('Posts',() =>{
    describe('GET /posts', () =>{
        it('should return an array of the all Posts', (done) =>{
            chai.request(app)
            .get('/posts')
            .end((err, res) => {
                if(err) done(err);
                expect(res).to.have.status(200);
                
                expect(res).to.be.an('object');
                expect(res.body.status).to.deep.equals('success');
                expect(res.body.data).to.be.an('array');
                done();

            });
        });
    });
});
// Test for creating Blog
describe('When the user create a blog --api/blog', () => {
         it('should return blog created successfully', (done) => {
        chai
          .request(app)
          .post('/post')
          .send({
            title: 'Modern CSS Techniques To Improve Legibility.',
            content: `In this article, we cover how we can improve websites legibility using some modern CSS techniques,
            great new technologies like variable fonts and putting into practise what we learned from doing
            scientific researches..`,
            author: 'Admin'
          })
          .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.equal('Post successfully created');
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('message');
            expect(res.body).to.have.property('data');
            done();
          });
      });

});

