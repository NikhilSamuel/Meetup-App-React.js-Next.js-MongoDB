import { MongoClient } from "mongodb";
async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://nikhil-admin:nikhils,mongo@cluster0.ddato.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default Handler;
