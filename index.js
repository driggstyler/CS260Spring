const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
//apiRouter.get('/scores', (_req, res) => {
  //res.send(scores);
//});

// SubmitScore
//apiRouter.post('/score', (req, res) => {
  //scores = updateScores(req.body, scores);
  //res.send(scores);
//});

//req.body.username for other things
//Object with placement att (or string/number) for other things

// GetLeaderboards
apiRouter.get('/leaderboards', (_req, res) => {
    //Database request here.
    res.send(leaderboards);
});


// Send in scores of player
apiRouter.post('/endgame',(req, res) => {
    leaderboards = updateLeaderboards(req.body, leaderboards);
    res.status(200);
})


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});