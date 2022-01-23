import express from 'express';

const app = express();
app.use(express.json());

let users = [];
let tweets = [];

users = [   {"username": "rodnei0", 
             "avatar": "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" },
            {"username": "rodnei1", 
            "avatar": "https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg" },
            {"username": "rodnei2", 
            "avatar": "https://teste" }

        ];

tweets = [
    { "username": "rodnei2", "tweet": "1" },
    { "username": "rodnei0", "tweet": "1" },
    { "username": "rodnei0", "tweet": "2" },
    { "username": "rodnei1", "tweet": "1" },
    { "username": "rodnei1", "tweet": "2" },
    { "username": "rodnei2", "tweet": "2" }
];

app.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const avatar = req.body.avatar;

    users.push({username: username, avatar: avatar});
    console.log(users)

    res.send("OK")
});

app.post("/tweets", (req, res) => {
    const username = req.body.username;
    const tweet = req.body.tweet;

    tweets.push({username: username, tweet: tweet});
    console.log(tweets)

    res.send("OK")
});

app.get("/tweets", (req, res) => {
    let filteredTweets = [];
    let avatars = [];
    let teste = [];

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