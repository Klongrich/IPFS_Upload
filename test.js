const ipfsAPI = require('ipfs-api');
const express = require('express');
const fs = require('fs');
const app = express();

require('dotenv').config();

const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})
let testFile = fs.readFileSync(process.env.FILE_PATH);

let testBuffer = new Buffer.from(testFile);
ipfs.files.add(testBuffer, function (err, file) {
    if (err) {
        console.log(err);
    }
    console.log(file)
})

app.get('/getfile', function(req, res) {
    
    const validCID = 'HASH_CODE'

    ipfs.files.get(validCID, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
        })
      })

})

app.listen(3000, () => console.log('App listening on port 3000!'))