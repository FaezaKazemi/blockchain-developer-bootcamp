
const assert = require('assert');
const Land = artifacts.require('RealEstateContract');
let accounts;
let land;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();
    land= await Land.new();  
})
describe("Land Test" , ()=>{


    it('Contract deploys' ,()=>{
        assert.ok(Land.address)
    }).timeout(20000),
    it("check the lad is registered" , async()=>{
        try{
            await land.registerEstate("locatien" , 10000 ,({
                from:accounts[0]
            }));
        }catch(err){
            assert(err);
        }
}).timeout(20000),
    it("Should return the number of properties correctly!" , async()=>{
        try{
            await land.getNumberOfEstates(accounts[0] ,({
                from:accounts[0]
            }));
        }catch(err){
            assert(err);
        }
    }),
    it("Area must be positive and not zero" , async()=>{
        try{
            await land.getArea(250 ,250, ({
                from:accounts[0]
            }));
        }catch(err){
            assert(err);
        }
    })

 })