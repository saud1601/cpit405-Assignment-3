
var images = [
    {
        name: "mazda",
        size: 5,
        type: "sidan",
        color: "red",
        src: "m5.jpg"
    },
    {
        name: "marcelago",
        size: 3,
        type: "sport",
        color: "whit",
        src: "s1.jpg"
    }, {
        name: "oudi",
        size: 4,
        type: "sport",
        color: "gray",
        src: "s2.jpg"
    }, {
        name: "mazarati",
        size: 1,
        type: "sport",
        color: "black",
        src: "s3.jpg"
    }, {
        name: "GT",
        size: 2,
        type: "sport",
        color: "whit",
        src: "s4.jpg"
    }, {
        name: "racecar",
        size: 6,
        type: "sport",
        color: "red",
        src: "s5.jpg"
    }, {
        name: "lamborgini",
        size: 7,
        type: "sport",
        color: "red",
        src: "s6.jpg"
    }, {
        name: "mazda",
        size: 8,
        type: "sidan",
        color: "gray",
        src: "m55.jpg"
    }, {
        name: "accent",
        size: 13,
        type: "sidan",
        color: "whit",
        src: "a1.jpg"
    }, {
        name: "mazda",
        size: 0,
        type: "sport",
        color: "red",
        src: "s7.jpg"

    }
]




var bt =document.createElement("button");
bt.id="mybtn";
var te = document.createTextNode("SortBytype");
bt.appendChild(te);



var bt2 =document.createElement("button");
bt2.id="mybtn2";
var te2 = document.createTextNode("SortBySize");
bt2.appendChild(te2);



var bt3 =document.createElement("button");
bt3.id="mybtn3";
var te3 = document.createTextNode("SortByColor");
bt3.appendChild(te3);






document.body.appendChild(bt);
var typ = document.getElementById("mybtn");
typ.addEventListener("click", sortbyType);

document.body.appendChild(bt2);
var siz = document.getElementById("mybtn2");
siz.addEventListener("click", sortbySize);


document.body.appendChild(bt3);
var clr = document.getElementById("mybtn3");
clr.addEventListener("click", sortbyColor);



document.body.appendChild(bt);
document.body.appendChild(bt2);
document.body.appendChild(bt3);




var ulElem = document.createElement("ul");

ulElem.id = "ulelments";

var liElem1 = document.createElement("li");
var imgElem1 = document.createElement("img");
imgElem1.src = images[0].src;
liElem1.appendChild(imgElem1);
ulElem.appendChild(liElem1);

imgElem1.style.height = "250px";
imgElem1.style.width = "250px";

var liElem2 = document.createElement("li");
var imgElem2 = document.createElement("img");
imgElem2.src = images[1].src;

imgElem2.style.height = "250px";
imgElem2.style.width = "250px";

liElem2.appendChild(imgElem2);
ulElem.appendChild(liElem2);


var liElem3 = document.createElement("li");
var imgElem3 = document.createElement("img");
imgElem3.src = images[2].src;
liElem3.appendChild(imgElem3);
ulElem.appendChild(liElem3);

imgElem3.style.height = "250px";
imgElem3.style.width = "250px";

var liElem4 = document.createElement("li");
var imgElem4 = document.createElement("img");
imgElem4.src = images[3].src;
liElem4.appendChild(imgElem4);
ulElem.appendChild(liElem4);

imgElem4.style.height = "250px";
imgElem4.style.width = "250px";

var liElem5 = document.createElement("li");
var imgElem5 = document.createElement("img");
imgElem5.src = images[4].src;
liElem5.appendChild(imgElem5);
ulElem.appendChild(liElem5);

imgElem5.style.height = "250px";
imgElem5.style.width = "250px";

var liElem6 = document.createElement("li");
var imgElem6 = document.createElement("img");
imgElem6.src = images[5].src;
liElem6.appendChild(imgElem6);
ulElem.appendChild(liElem6);
imgElem6.style.height = "250px";
imgElem6.style.width = "250px";

var liElem7 = document.createElement("li");
var imgElem7 = document.createElement("img");
imgElem7.src = images[6].src;
liElem7.appendChild(imgElem7);
ulElem.appendChild(liElem7);
imgElem7.style.height = "250px";
imgElem7.style.width = "250px";

var liElem8 = document.createElement("li");
var imgElem8 = document.createElement("img");
imgElem8.src = images[7].src;
liElem8.appendChild(imgElem8);
ulElem.appendChild(liElem8);
imgElem8.style.height = "250px";
imgElem8.style.width = "250px";

var liElem9 = document.createElement("li");
var imgElem9 = document.createElement("img");
imgElem9.src = images[8].src;
liElem9.appendChild(imgElem9);
ulElem.appendChild(liElem9);
imgElem9.style.height = "250px";
imgElem9.style.width = "250px";

var liElem10 = document.createElement("li");
var imgElem10 = document.createElement("img");
imgElem10.src = images[9].src;
liElem10.appendChild(imgElem10);
ulElem.appendChild(liElem10);
imgElem10.style.height = "250px";
imgElem10.style.width = "250px";




document.body.appendChild(ulElem);






function display() {
    var ul = document.getElementById("ulelments");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    console.log("in dis")
    var i = 0;
    do {
        var l = document.createElement("li");
        var m = document.createElement("img");
        m.style.height = "250px";
        m.style.width = "250px";
        l.appendChild(m);
        m.src = images[i].src;
        var ulm = document.getElementById("ulelments");
        ulm.appendChild(l);

        i++;
    } while (i < images.length);

    document.body.appendChild(ulm);

}





function sortbyType(a, b) {
    
    images.sort(function (a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    display();
    
}



    

   

function sortbyColor(a, b) {

    images.sort(function (a, b) {
        var x = a.color.toLowerCase();
        var y = b.color.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    display();
    
}



function sortbySize(a, b) {

    images.sort(function (a, b) {
        var x = a.size;
        var y = b.size;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
        
display();

    
}




