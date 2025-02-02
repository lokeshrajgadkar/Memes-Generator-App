let meme = document.getElementById("meme");
let title = document.getElementById("title");
let genMemeBtn = document.getElementById("generate-meme-btn");
let subredditName = document.getElementById("subreddit");
let url = "https://meme-api.com/gimme/";

let subreddits = ["raimimemes","marvelmemes","ProgrammerHumor","catmemes","wholesomememes","dogmemes",
    "me_irl","dankmemes","Animemes","funny", "memes", "wholesomememes"
    ,"AdviceAnimals", "comedyheaven"];

let getMeme = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    fetch(url+randomSubreddit)
    .then(res => res.json())
    .then(data => {
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title; 
        };
        subredditName.innerHTML = data.subreddit;
        memeImg.src = data.url;
    })
};

genMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
