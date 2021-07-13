const request = require('request-promise');
const check = async () => {
  const data = await request.get({
    uri: `http://127.0.0.1:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai`
  });
  return data;
};
check().then(() => {
 console.log('success');
}).catch((e) => {
 console.log(e);
});