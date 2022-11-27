
var btn = document.getElementById('btn')
function openPage(){
    var search = document.getElementById('search').value;
    if (search === "tailwind"){
        window.open('/tail/tai1.html',target="_self")
    }
    if (search === "contact"){
        window.open('/contact.html',target="_self")
    }
    if (search === "tailwind ep1"){
        window.open('/tail/tai1.html',target="_self")
    }  if (search === "courses"){
        window.open('/course.html',target="_self")
    }  if (search === "home"){
        window.open('/index.html',target="_self")
    }
    if (search === "home"){
        window.open('/index.html',target="_self")
    }
    if (search === "tailwind ep2"){
        window.open('/tail/tai2.html',target="_self")
    }
    if (search ==="tailwind ep3")
        window.open('/tail/tai3.html',target="_self")
    }
    if (search ==="tailwind ep4"){
        window.open('/tail/tai4.html',target="_self")
    }
    if (search ==="tailwind ep5"){
        window.open('/tail/tai5.html',target="_self")
    }

btn.addEventListener('click',openPage);
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    }
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function (){
loader.style.display="none";
    })
    