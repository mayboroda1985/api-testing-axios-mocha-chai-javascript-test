const axios = require("axios");
const { expect } = require("chai");
const { faker } = require("@faker-js/faker");

describe("PATCH API Request Tests", async () => {
    it("should be able update only name without job title", async () => {
        
        const randomName = faker.name.fullName();
        //const randomJobTitle = faker.name.jobTitle();
        const res = await axios.patch('https://reqres.in/api/users/737',
            {
                "name": randomName
            }
        ).then(res => res.data)
        console.log(res);
        expect(res.name).equal(randomName);

    })

    it("should have property updatedAt", async () => {
        
        const randomName = faker.name.fullName();
        const res = await axios.patch('https://reqres.in/api/users/737',
            {
                "name": randomName
            }
        ).then(res => res.data)
        console.log(res);
        expect(res.name).equal(randomName);
       
        
        expect(res).to.haveOwnProperty("updatedAt");
    })
});
