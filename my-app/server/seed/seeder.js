const MongoClient = require('mongodb').MongoClient



async function seedDB() {

    const uri = "mongodb://localhost/DiscGopher"

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
    });
    try {
        await client.connect();
        console.log("connected correctly to server")

        const collection = client.db("iot").collection("DiscGopher");

        // the drop() command destroys all data from a collection

        // make sure you run it against proper database and collections

        collection.drop();



    } catch (error) {
        
    }
}

module.exports = seedDB