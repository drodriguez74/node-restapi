# node-restapi

Simple example of how to create a RESTful API using node and express.
To run locally, you'll need to run "npm install" and then "node app.js"

Endpoints
/api/v1/parse (POST)
/api/v2/parse (POST)

Request Body
{
    data: “JOHN0000MICHAEL0009994567”
}

Expected Results
/api/v1/parse – Response Body
{
    statusCode: 200,
    data:  {
        firstName: “JOHN0000”,
        lastName: “MICHAEL000”,
        clientId: “9994567”
    }
}

/api/v2/parse – Response Body
{
    statusCode: 200,
    data:  {
        firstName: “JOHN”,
        lastName: “MICHAEL”,
        clientId: “999-4567”
    }
}

http://localhost:3000/ returns the data.json 
http://localhost:3000/api/v1/parse
http://localhost:3000/api/v2/parse
