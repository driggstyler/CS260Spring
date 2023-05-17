# Scattergories
Repository for the StartUp after first creating it in the CS 260 Spring class.
## Description Deliverable
### Elevator Pitch
Scattergories is an absolute must for those who enjoy creative word games with friends. In this game you have a list of descriptions or things and a blank list next to it. A random letter is rolled and you are trying to come up with words that start with that letter and that each match one of the items on the list of descriptions. You can’t use the same word more than once. After time runs out, you get a point for each word you got. If you and another player get the same word for a list item, neither of you get the point. This game is normally played at a table in person, but with this online version, you can play with friends across the world and compare highscores with one another. All you need is an email to login and you are ready to go!
### Key Features
- Login using your email through HTTPS.
- Ability to connect with other users to play in real time.
- A leaderboard to shoe the high scores.
### Using each of the technologies discussed in class
- **HTML** - The basic structure of all webpages, it will also be the main structure of my website, using a few links to other pages on my site to get to login, leaderboards, the game iteself, and any other utility pages in between.
- **CSS** - To style the pages to make it feel like the word game at your table.
- **Javascript** - To generate letters, compare player's lists, and implement a voting system for the player's inputed words, among other things.
- **Webservice** - Talking to the server to send scores and votes.
- **Authentication** - Using inputed emails to create logins for new users. (Though an email may not be necessary)
- **Database persistence** - Using a database on my machine to store the highscores of all time. (Or possibly just in a certain times frame, like of the month or something)
- **Web Socket** - Sending information from the server to players, such as the highscores on the leaderboard, vote results for the words, and any other needed utilities.
- **Web Framework** - Using react to handle routing.
### Rough Sketches Of The Pages
The main Game Page during a round of the game.
![Screenshot (161)](https://github.com/driggstyler/StartUp/assets/99686819/e5bf70c0-d10f-46da-8187-dd06d9bb9640)
The Login Page.
![Screenshot (162)](https://github.com/driggstyler/StartUp/assets/99686819/3ccf10d3-8af6-4b6f-b0b4-fa0f99e79598)
Voting Page in bewteen rounds.
![Screenshot (160)](https://github.com/driggstyler/StartUp/assets/99686819/23d043a8-a14a-4f37-86fe-2ffd98cc1b1f)
* Note that two of these pages should have the outline of a website tab, but I could not find the tool needed to make other outlines, so I went the next best thing.
