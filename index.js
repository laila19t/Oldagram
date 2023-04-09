const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")
let str=""

for(let i=0;i<posts.length;i++){
    str+=`
    <section class="post-head">
    <img class="avatar-img" src="${posts[i].avatar}" alt="user avatar picture"/>
    <div>
        <p class="bold">${posts[i].name}</p>
        <p>${posts[i].location}</p>
    </div> 
    </section>
    
    <section class="post">
    <img  class="post-img" src="${posts[i].post}" alt="post">
    </section>
    
    <section class="post-footer">
    <div class="actions">
     <img class="icon" src="images/icon-heart.png" alt="heart icon">
     <img class="icon" src="images/icon-comment.png" alt="heart icon">
     <img class="icon" src="images/icon-dm.png" alt="heart icon">
    </div>
    <p class="bold">${posts[i].likes} likes</p>
    <p> <span class="bold">${posts[i].username} </span>${posts[i].comment}</p>
    </section>
    `
}
main.innerHTML = str;


