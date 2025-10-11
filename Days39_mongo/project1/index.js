const express = require("express"); // requiring express
const mongoose = require("mongoose"); // requiring mongoose
const methodOverride=require("method-override");//requiring methodOverride
const app = express();
const port = 5050;
const Chat = require("./models/chats.js");
const path = require("path");
app.path("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
// mongoose portion
main()
  .then((res) => {
    console.log("connection successful.");
  })
  .catch((err) => {
    console.log("connection failed.", err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatApp");
}

let chat1 = new Chat({
  from: "Bittu",
  to: "anu",
  message: "Happy Raksha Bandhan ☺ ",
  createdAt: new Date(),
});
chat1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// express portion
app.get("/", (req, res) => {
  console.log("Connection formed between server.");
  res.send("Server is working well !!");
});
// index route(for displaying chats)
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
//   console.log(chats);
  res.render("index.ejs", { chats });
  // res.send("chat server working well.");
});
// new route(for new chat)
app.get("/chats/new", (req, res) => {
  // res.send("new chat server working well");
  res.render("newChat.ejs");
});
app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  // console.log(newChat);
  //now instead of printing we can save it to out database
  newChat
    .save()
    .then((res) => {
      console.log("Chat was saved.");
    })
    .catch((err) => {
      console.log("Chat error", err);
    });
  //   res.send("new chat working well.");
  //now we can redirect this post request
  res.redirect("/chats");
});
// routing to edit the messages
app.get("/chats/:id/edit", async (req, res) => {
  // res.send("edit routing working well.");
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
// update route
app.put("/chats/:id", async (req, res) => {
  let {id} = req.params;
  let { message:newMessage } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMessage },
    { runValidators: true },
    { new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});
app.listen(port, (req, res) => {
  console.log(`This app is running on port ${port}.`);
});
