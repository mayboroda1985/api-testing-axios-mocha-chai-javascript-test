const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("POST API Request Tests", async () => {
    it("should be able post a user daetails", async () => {
        const randomName = faker.name.fullName();
        const randomJobTitle = faker.name.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',
            {
                 "name": randomName,
                "job": randomJobTitle
            
            });
        console.log(res.data);
        console.log(res.status);
        expect(res.data.name).equal(randomName);
        expect(res.data.job).equal(randomJobTitle);
        expect(res.status).to.equal(201);
});


    it('should create a new user with createdAt date in the correct format', async () => {
        const randomName = faker.iname.fullName();
        const randomJobTitle = faker.name.jobTitle();
        const response = await axios.post('https://reqres.in/api/users', {
            "name": randomName,
            "job": randomJobTitle
        });
        const user = response.data;
        expect(user.createdAt).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  
});
});
//need to fix this code and check how to fail it
       it('Handle with errror message : should create a new user with createdAt date in the correct format', async () => {

       try {
        const randomName = faker.iname.fullName();
        const randomJobTitle = faker.name.jobTitle();
        const response = await axios.post('https://reqres.in/api/users', {
            "name": randomName,
            "job": randomJobTitle

        });
        const user = response.data;
        const createdAt = new Date(user.createdAt);
        const now = new Date();
        expect(createdAt.toDateString()).to.equal('Thu Feb 18 2023');
    } catch (error) {
        console.log("Date is incorrect format: " + error);
      }
    });

    it.only('Should extract user Id ', async () => {

            const randomName = faker.name.fullName();
            const randomJobTitle = faker.name.jobTitle();
            const res = await axios.post('https://reqres.in/api/users',
                {
                     "name": randomName,
                    "job": randomJobTitle
                

                });
            console.log(res.data);
            console.log(res.status);
      
   
            expect(res.data).to.haveOwnProperty("id");
            expect(res.status).to.equal(201);
            expect(res.data.id).to.be.a('string');

            const userId = res.data.id
            expect(userId).to.not.be.empty;
            console.log(userId);
     });
