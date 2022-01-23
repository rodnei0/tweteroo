import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const avatar = req.body.avatar;

    users.push({username: username, avatar: avatar});

    res.send("OK")
});

app.post("/tweets", (req, res) => {
    const username = req.body.username;
    const tweet = req.body.tweet;

    tweets.push({username: username, tweet: tweet});

    res.send("OK")
});

app.get("/tweets", (req, res) => {
    let filteredTweets = [];
    let avatars = [];

    for (let i = tweets.length-1;i >= tweets.length-10; i--){
        if (i < 0) {
            break
        }
        avatars = users.find(user => user.username === tweets[i].username);
        filteredTweets.push(tweets[i]);
        filteredTweets[filteredTweets.length-1].avatar = avatars.avatar; 
    }

    res.send(filteredTweets);
});

app.listen(5000);