
// Initial solution - commenting out for attempt bonus solution
// Was able to solve with bonus marks but I will keep the original

// var tweets = [ "Sick of having to go to 2 different huts to buy pizza & sunglasses.", 
//                 "Waabalubbadubbdub", "This is the most annoying part of the assignment",
//                 "I hate applying concepts from my English high school experiences",
//                 "Meh, directing my dislike for creating content towards creating content seems to be working",
//                 "I hope I am doing this first step correctly...",
//                 "MMMMM pretty sure six isn't enough tweets yet, well here's seven then!",
//                 "Thankful for machines and how I hopefully won't have to re-type this nonsense a million times!!!",
//                 "You know, I'm sure I could have just done shorter quotes...",
//                 "True!"]
// console.log(tweets);

// for (let counter = 0; counter < tweets.length; counter++) {
//     console.log(tweets[counter]);
    
// }


// Define 10 variables as tweet 1-10, include the tweet content, username, created date and age of user

var tweet1 = {
    tweet: "Sick of having to go to 2 different huts to buy pizza & sunglasses.",
    username: "RandomPerson",
    createdAt: "01-16-2010",
    age: 54
};

var tweet2 = {
    tweet: "Waabalubbadubbdub",
    username: "RickSanchez",
    createdAt: "02-16-2014",
    age: 65
};

var tweet3 = {
    tweet: "This is the most annoying part of the assignment",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet4 = {
    tweet: "I hate applying concepts from my English high school experiences",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet5 = {
    tweet: "Meh, directing my dislike for creating content towards creating content seems to be working",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet6 = {
    tweet: "I hope I am doing this first step correctly...",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet7 = {
    tweet: "MMMMM pretty sure six isn't enough tweets yet, well here's seven then!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet8 = {
    tweet: "Thankful for machines and how I hopefully won't have to re-type this nonsense a million times!!!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet9 = {
    tweet: "You know, I'm sure I could have just done shorter quotes...",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

var tweet10 = {
    tweet: "True!",
    username: "Estretto",
    createdAt: "03-18-2022",
    age: 25
};

// Created array of above 10 tweets

var tweets = [ tweet1, tweet2, tweet3, tweet4, tweet5, tweet6, tweet7, tweet8, tweet9, tweet10 ]

// Created loop of tweets array

for (let counter = 0; counter < tweets.length; counter++) {
    console.log(tweets[counter]);
}