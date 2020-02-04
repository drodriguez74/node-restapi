var express = require("express");
var app = express();
const data = require('./data.json');

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.send(data);
});

app.get("/api/v1/parse", (req, res, next) => {
  const str = data.data;
  const fnameIdx = str.indexOf("0000");
  const lnameIdx = str.lastIndexOf("000");

  const firstName = str.substr(0, fnameIdx+4);
  const lastName = str.substr(fnameIdx+4, (lnameIdx + 3) - (fnameIdx + 4));
  const clientId = str.substr(lnameIdx + 3);
  res.status(200)
      .send({
        statusCode :200,
        data: {
          firstName,
          lastName,
          clientId,
        }
      });
});

app.get("/api/v2/parse", (req, res, next) => {
  const str = data.data;
  const fnameIdx = str.indexOf("0000");
  const lnameIdx = str.lastIndexOf("000");

  const firstName = str.substr(0, fnameIdx);
  const lastName = str.substr(fnameIdx + 4, (lnameIdx) - (fnameIdx + 4));
  const clientId = str.substr(lnameIdx + 3);
  const start = clientId.substr(0, 3);
  const end = clientId.substr(3);
  
  res.status(200)
    .send({
      statusCode :200,
      data: {
        firstName,
        lastName,
        clientId : start + '-' + end
      }
    });
});
