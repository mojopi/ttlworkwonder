function makeHeadshot5(e) {
    var headshot = document.createElement("div");
    // var faces2 = document.getElementById("faces4")
    headshot.id = "headshotE" + e;
    document.body.appendChild(headshot);
    headshot.classList.add("headshot");

    var description = document.createElement("div");

    description.id = "descriptionE" + e;
    headshot.appendChild(description);
    description.classList.add("description-invisible");


    description.addEventListener("click", function() {
        description.classList.add("description-apparent");


    })

    description.addEventListener("animationend", function() {
        description.classList.remove("description-apparent");
    })




    var name = document.createElement("div");
    document.getElementById("headshotE" + i).appendChild(name);
    name.classList.add("name");
    name.id = "nameE" + i;


}


for (i = 0; i < 10; i++) { makeHeadshot5(i)};

document.getElementById('nameE0').innerText = "Alison";

document.getElementById('descriptionE0').innerHTML = "";

document.getElementById('nameE1').innerText = "Amber";
document.getElementById('descriptionE1').innerHTML = "";

document.getElementById('nameE2').innerText = "Anthony";
document.getElementById('descriptionE2').innerHTML = "";

document.getElementById('nameE3').innerText = "Clarissa";
document.getElementById('descriptionE3').innerHTML = "";

document.getElementById('nameE4').innerText = "Erika";
document.getElementById('descriptionE4').innerHTML = "";

document.getElementById('nameE5').innerText = "Haleigh";
document.getElementById('descriptionE5').innerHTML = "";

document.getElementById('nameE6').innerText = "Jonathan";
document.getElementById('descriptionE6').innerHTML = "";

document.getElementById('nameE7').innerText = "Karen";
document.getElementById('descriptionE7').innerHTML = "";

document.getElementById('nameE8').innerText = "Leon";
document.getElementById('descriptionE8').innerHTML = "";

document.getElementById('nameE9').innerText = "Zyan";
document.getElementById('descriptionE9').innerHTML = "";