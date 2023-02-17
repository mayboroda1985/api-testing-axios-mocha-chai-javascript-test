const axios = require("axios");
const { expect } = require("chai");



//we use documentation from https://reqres.in

describe("GET API Request Tests", async () => {
    it("should be able get user list", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res.data);
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
    })
})

// describe("GET API Request Tests", async () => {
//     it("should be able get support info", async () => {
//         const res = await axios.get('https://reqres.in/api/users?page=2')
//         .then(function (res) {
         
//         // console.log(res.data.support.url);
//         // console.log(res.status);
//         expect(res.data.support.url).equal("https://reqres.in/#support-headings");
//         expect(res.status).eqls(400);
//         })
//         .catch(function (error) {
//             if (error.res)
//           console.log(error.res);
//             else {
//             console.log('Error', error.message);
          
//         }
      
//         });
//     });
// })