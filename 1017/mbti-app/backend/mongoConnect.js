const { MongoClient, ServerApiVersion } = require('mongodb');
const DB_URI = 'mongodb://localhost:27017';
const DB_URI_ATLAS =
  'mongodb+srv://root:root@cluster0.vux7rqk.mongodb.net/?retryWrites=true&w=majority';
const uri = DB_URI_ATLAS;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = client;
