hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

function openlogin() {
    document.getElementById("mylogin").style.display="block";
    document.getElementById("blur").style.display="block";
}

function closelogin() {
    document.getElementById("mylogin").style.display="none";
    document.getElementById("blur").style.display="none";
}

function show1(anything) {
    document.querySelector('.textBox1').value = anything;
}

function show2(anything) {
    document.querySelector('.textBox2').value = anything;
}

function show3(anything) {
    document.querySelector('.textBox3').value = anything;
}

let dropdown1 = document.querySelector('.property');
dropdown1.onclick = function() {
    dropdown1.classList.toggle("active");
}

let dropdown2 = document.querySelector('.bedroom');
dropdown2.onclick = function() {
    dropdown2.classList.toggle("active");
}

let dropdown3 = document.querySelector('.price');
dropdown3.onclick = function() {
    dropdown3.classList.toggle("active");
}