import express from 'express';

const app = express();
app.use(express.json());

let users = [];
let tweets = [];

app.get("/sign-up", (req, res) => {
    const username = req.body.username;
    const avatar = req.body.avatar;

    users.push({username: username, avatar: avatar});
    console.log(users)

    res.send("OK")
});

app.get("/tweets", (req, res) => {
    const username = req.body.username;
    const tweet = req.body.tweet;

    tweets.push({username: username, tweet: tweet});
    console.log(tweets)

    res.send("OK")
});

app.listen(5000);