import chai from 'chai';
import chaihttp from 'chai-http';
import  app  from "../SRC/index";

const { expect } = chai;
 //when the user wants to view the users
chai.use(chaihttp);
describe('Get All Users',() =>{
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
//Testing the save Post expecting status 200 of success
describe('POST /users', () =>{
    it('saves the users', (done) =>{
        chai.request(app)
        .post('/users')
        .send({
            email:"ange@gmail.com",
            password:"678908",
            role:"admin"
        })
        .end((err, res) =>{
            if(err) done(err);
        
            expect(res).to.have.status(200);
            expect(res).to.be.an('object');
            expect(res.body.status).to.deep.equals('success');
          
            done();
        });
    });
});