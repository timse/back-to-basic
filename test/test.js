import chai from 'chai';
import b2b,{characterMap} from '../index.js';

chai.should();

describe('back to basic', ()=> {

    it('should replace ä with ae as its basic latin representation', ()=>{
        b2b('ä').should.equal('ae');
    });
    it('should replace ẞ with SS and ß with ss as its basic latin representation', ()=>{
        b2b('ß').should.equal('ss');
        b2b('ẞ').should.equal('SS');
    });
    it('should also replace all other western latin special charaters with their basic latin representation', ()=>{
        const specialKeys = Object.keys(characterMap).join('');
        const expectedResults = Object.keys(characterMap).map((key)=> characterMap[key]).join('');
        b2b(specialKeys).should.equal(expectedResults);
    });
    it('should not replace any other special characters', ()=>{
        const nonToTransformChars = '!@#$%^&*()_+-=[]\\{}|;:"\',./<>?';
        b2b(nonToTransformChars).should.equal(nonToTransformChars);
    });
});
