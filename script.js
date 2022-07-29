// Declaring Variables
let firstband = document.getElementById("first");
let secondband = document.getElementById("second");
let multiplier = document.getElementById("multiplier");
let tolerance = document.getElementById("tolerance");
let rarea = document.getElementById("resistance");
let fbv;
let sbv;
let mv;
let tv;


// declaring function for first band of resistor
function black1(){
    firstband.style.backgroundColor = "black";
    fbv = 0;
}
function brown1(){
    firstband.style.backgroundColor = "brown";
    fbv = 1;
}
function red1(){
    firstband.style.backgroundColor = "red";
    fbv = 2;
}
function orange1(){
    firstband.style.backgroundColor = "orange";
    fbv = 3;
}
function yellow1(){
    firstband.style.backgroundColor = "yellow";
    fbv = 4;
}
function green1(){
    firstband.style.backgroundColor = "green";
    fbv = 5;
}
function blue1(){
    firstband.style.backgroundColor = "blue";
    fbv = 6;
}
function violet1(){
    firstband.style.backgroundColor = "violet";
    fbv = 7;
}
function grey1(){
    firstband.style.backgroundColor = "grey";
    fbv = 8;
}
function white1(){
    firstband.style.backgroundColor = "white";
    fbv = 9;
}

// Declaring function for second band of resistor //
function black2(){
    secondband.style.backgroundColor = "black";
    sbv = 0;
}
function brown2(){
    secondband.style.backgroundColor = "brown";
    sbv = 1;
}
function red2(){
    secondband.style.backgroundColor = "red";
    sbv = 2;
}
function orange2(){
    secondband.style.backgroundColor = "orange";
    sbv = 3;
}
function yellow2(){
    secondband.style.backgroundColor = "yellow";
    sbv = 4;
}
function green2(){
    secondband.style.backgroundColor = "green";
    sbv = 5;
}
function blue2(){
    secondband.style.backgroundColor = "blue";
    sbv = 6;
}
function violet2(){
    secondband.style.backgroundColor = "violet";
    sbv = 7;
}
function grey2(){
    secondband.style.backgroundColor = "grey";
    sbv = 8;
}
function white2(){
    secondband.style.backgroundColor = "white";
    sbv = 9;

}


// Declaring the function for multiplier of a resistance //
function black4(){
    multiplier.style.backgroundColor = "black";
    mv = 1;
}
function brown4(){
    multiplier.style.backgroundColor = "brown";
    mv = 10;
}
function red4(){
    multiplier.style.backgroundColor = "red";
    mv = 100;
}
function orange4(){
    multiplier.style.backgroundColor = "orange";
    mv = 1000;
}
function yellow4(){
    multiplier.style.backgroundColor = "yellow";
    mv = 10000;
}
function green4(){
    multiplier.style.backgroundColor = "green";
    mv = 100000;
}
function blue4(){
    multiplier.style.backgroundColor = "blue";
    mv = 1000000;
}
function violet4(){
    multiplier.style.backgroundColor = "violet";
    mv = 10000000;
}
function grey4(){
    multiplier.style.backgroundColor = "grey";
    mv = 100000000;
}
function white4(){
    multiplier.style.backgroundColor = "white";
    mv = 1000000000;
}
function gold4(){
    multiplier.style.backgroundColor = "gold";
    mv = 0.1;
}
function silver4(){
    multiplier.style.backgroundColor = "silver";
    mv = 0.01;
}

// Declaring a function for tolerance value//
function brown5(){
    tolerance.style.backgroundColor = "brown";
    tv = 1;
}
function red5(){
    tolerance.style.backgroundColor = "red";
    tv = 2;
}
function orange5(){
    tolerance.style.backgroundColor = "orange";
    tv = 3;
}
function yellow5(){
    tolerance.style.backgroundColor = "yellow";
    tv = 4;
}
function green5(){
    tolerance.style.backgroundColor = "green";
    tv = 0.5;
}
function blue5(){
    tolerance.style.backgroundColor = "blue";
    tv = 0.25;
}
function violet5(){
    tolerance.style.backgroundColor = "violet";
    tv = 0.10;
}
function grey5(){
    tolerance.style.backgroundColor = "grey";
    tv = 0.05;
}
function gold5(){
    tolerance.style.backgroundColor = "gold";
    tv = 5;
}
function silver5(){
    tolerance.style.backgroundColor = "silver";
    tv = 10;
}

// this function run everytime
function resistance(){
    // let resistance = fbv * 10 + sbv;
    // rarea.innerHTML = resistance;
    let resistance = (fbv * 10 + sbv) * mv;
    rarea.innerHTML = resistance+"Ω"+ "  +-"+tv+"%";
}

function bodd(){
    setInterval(resistance,1000);
}