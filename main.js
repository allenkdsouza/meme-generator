const generateMemeBtn = document.querySelector(".meme-generator .generator-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetail =(url,title,author) => {
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by : ${author}`;
}
const generateMeme= () => {
    fetch (" https://meme-api.com/gimme")
    .then((response)=> response.json())
    .then((data)=> {
            updateDetail (data.url, data.title, data.author)
    });
};
generateMemeBtn.addEventListener("click",generateMeme);

