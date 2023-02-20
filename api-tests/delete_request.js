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


// //Todo: add verification that publication with specified title has been created
//  //create array []
//  const resultArray = [];
//  await PublicationsPage.linkLoadMore.waitForDisplayed();
//  const listTitles = awaitPublicationsPage.publicationTitlesList;
//  // await console.log(listTitles.length);
//  //iterate publications title elements array
//  for ( let i = 0; i < listTitles.length; i++) {
//      // await console.log( await listTitles[i].getText());
//      resultArray.push(await listTitles[i].getText());
//  }
//  //get text of each i publication element and push it to result array
//  //verify that result array contains created publication title
//  await expect(resultArray).toContain(publicationTitle);
// });
