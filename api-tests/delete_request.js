const axios = require("axios");
const { expect } = require("chai");

describe("DELETE API Request Tests", () => {

  let lastUserId;

  before(async () => {
    // Get a list of users sorted by creation date
    const res = await axios.get('https://reqres.in/api/users?page=2');
    const responseArray = res.data.data;
    lastUserId = responseArray[responseArray.length - 1].id;
    console.log(lastUserId);
  });

  it('should delete the last user', async () => {
    const res = await axios.delete('https://reqres.in/api/users/${lastUserId}');
    expect(res.status).to.equal(204);
  });

});