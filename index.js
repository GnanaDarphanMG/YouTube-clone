const menu = document.querySelector('#menu');
console.log(menu);

const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

let div = document.getElementById("videodiv");




async function display(){

    // q = Popular Videos --> Popular%20Videos (%20 -> Space)

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyB-DOo5cW04OY-ZjEuiGvqVROiU5s2vtjs&maxResults=25`);

    let data = await res.json();
    
    for({id:{videoId}}of data.items)
    {
    let videodiv= document.createElement("iframe")
    videodiv.setAttribute("class","mons")
    videodiv.src = `https://www.youtube.com/embed/${videoId}`;
    videodiv.allow = 'fullscreen'
    div.append(videodiv)
    }

}

display();





async function searchVideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let query = document.getElementById("video").value; // Search String/ Query String


let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyB-DOo5cW04OY-ZjEuiGvqVROiU5s2vtjs&maxResults=25`);
let data = await res.json();

for({id:{videoId}}of data.items)
{
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)
}

}

