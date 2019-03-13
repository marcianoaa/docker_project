const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const Dog = require("./models/dog");

function startServer(){
  mongoose
    .connect(
      'mongodb://localhost:27017/admin',
      { useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE
      }
    )
    .then(
      () => { console.log('Database is connected!')},
      err => { startServer();}
    );
}

startServer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/dogs", (req, res, next) => {
  const post = new Dog({
    dogid: req.body.dogid,
    name: req.body.name,
    breed: req.body.breed,
    gender: req.body.gender,

  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Dog added successfully",
      postId: createdPost._id
    });
  });
});

app.put("/api/dogs", (req, res, next) => {
  const post = ({
    dogid: req.body.dogid,
    name: req.body.name,
    breed: req.body.breed,
    gender: req.body.gender,

  });
  console.log(post)
  console.log(req.body);
  Dog.findOneAndUpdate({_id: req.body.id}, post, function(err, doc){
    if (err) return res.status(500).send({ message: err , postId: req.body._id});
    return res.status(201).send({message: 'successfully saved!', postId: req.body._id});
});
});

app.get("/api/dogs", (req, res, next) => {
  Dog.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      dogs: documents
    });
  });
});

app.delete("/api/dogs/:id", (req, res, next) => {
  console.log(req.params)
  Dog.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: "Dog deleted!" });
  });
});

module.exports = app;
