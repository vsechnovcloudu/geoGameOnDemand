const nunjucks = require('nunjucks');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    
    const file = await renderFile();
    const upload = await uploadFile(file);
    console.log(upload);
    
    callback(null, upload);
};

async function renderFile() {
nunjucks.configure('views', { autoescape: true });

var mainpage = nunjucks.render('index.njk');
return mainpage;
}

async function uploadFile(mainpage) {

const response = await s3.upload({
    Bucket: "vvc.geoondemand.developer",
    Key: "index.html",
    Body: mainpage,
  }).promise();
  return response;
}
