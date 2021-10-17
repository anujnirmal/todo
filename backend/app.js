const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());


const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing-401a3-default-rtdb.firebaseio.com"
});

const db = admin.firestore();


async function insertData(db, userName){
  await db.collection('users').doc().set(userName);
}

app.post("/", (req, res) => {
  console.log(req.body);
  const userName = req.body;
  insertData(db, userName)

})


app.listen(5000, () => {
  console.log("Server started at port 5000")
});


// async function getData(){

// const snapShot = await db.collection('users').get();
// snapShot.forEach(doc =>{
//     console.log(doc.id, '=>' ,doc.data().email.personal);
// })

// }

// getData();
