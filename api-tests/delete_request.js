const axios = require("axios");
const { expect } = require("chai");

describe("DELETE API Request Tests", async () => {
    let userId;
    before(async () => {
        // Get a list of users sorted by creation date
        const res = await axios.get('https://reqres.in/api/users?page=2');
    
        // Extract the userId of the last created user from the response
        const lastUser = res.data[res.data.length - 1];
       userId = lastUser.id;
        console.log(lastUser);
        console.log(userId);
      });
    
    it("should be able delete user with id 178", async () => {
        const res = await axios.delete('https://reqres.in/api/users/${userId}');
        console.log(res.data);
        expect(res.status).equal(204);
    })
})