const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://root:root@cluster0.rqpf5kr.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function main() {
  await client.connect();
  const users = client.db('kdt1').collection('users');
  await users.deleteMany({});
  await users.insertMany([
    {
      name: 'pororo',
      age: 5,
    },
    {
      name: 'loopy',
      age: 6,
    },
    {
      name: 'crong',
      age: 4,
    },
  ]);
  const data = users.find({});
  const arr = await data.toArray();
  console.log(arr);
  
  await client.close();
}

main();
