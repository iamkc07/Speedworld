
// ***** Search Section ============================ 

var word = document.getElementById("search-bike");
word.addEventListener("keypress", function (event) {

    if (event.keyCode == 13) {
        openPage();
        word.value = '';
    }
});


function openPage() {
    var x = document.getElementById("search-bike").value.toLowerCase();


// KTM Bike =====================================>
    if (x === " ktm 790 duke" || x === "790duke" || x === "790 duke" || x === "duke 790" || x === "duke790") {
        window.open("./Html Pages/790duke.html", "_self");
    }

    else if (x === " ktm 390 duke" || x === "390duke" || x === "390 duke" || x === "duke 390" || x === "duke390") {
        window.open("./Html Pages/390duke.html", "_self");
    }

    else if (x === " ktm 200 duke" || x === "200duke" || x === "200 duke" || x === "duke 200" || x === "duke200") {
        window.open("./Html Pages/200duke.html", "_self");
    }

    else if (x === " ktm 250 duke" || x === "250duke" || x === "250 duke" || x === "duke 250" || x === "duke250") {
        window.open("./Html Pages/250duke .html", "_self");
    }

    else if (x === " ktm 125 duke" || x === "125duke" || x === "125 duke" || x === "duke 125" || x === "duke125") {
        window.open("../Html Pages/125duke.html", "_self");
    }

    else if (x === " ktm duke" || x === "duke" || x === "ktm" || x === "ktm bike") {
        window.open("./Html Pages/KTM page.html", "_self");
    }



// BMW Bike =====================================>
    else if (x === " bmw s 1000rr" || x === "bmw s1000rr" || x === "s1000rr") {
        window.open("./Html Pages/bmw - s 1000rr.html", "_self");
    }

    else if (x === "bmw g 310r" || x === "bmw g310r" || x === "g310r") {
        window.open("./Html Pages/bmw-g 310r.html", "_self");
    }

    else if (x === "bmw r 1250rt" || x === "bmw r1250rt" || x === "bmw r 1250") {
        window.open("./Html Pages/bmw-r 1250 rt.html", "_self");
    }

    else if (x === "bmw r nine t" || x === "bmw r ninet") {
        window.open("./Html Pages/bmw-r nine t .html", "_self");
    }

    else if (x === "bmw s 1000xr" || x === "bmw s1000xr") {
        window.open("./Html Pages/bmw-s 1000xr.html", "_self");
    }

    else if (x === "bmw" || x === "bmw bike" || x === "bmw bikes") {
        window.open("./Html Pages/bmw-s 1000xr.html", "_self");
    }



// Benelli Bike =====================================>
    else if (x === "benelli 502c" || x === "502c benelli" || x === "502c") {
        window.open("./Html Pages/b-n 502c .html", "_self");
    }

    else if (x === "benelli imperiale 400" || x === "imperiale 400" || x === "imperiale" || x === "benelli 400" ) {
        window.open("./Html Pages/B- IMPERIALE400.html", "_self");
    }

    else if (x === "benelli leoncino 500" || x === "leoncino 500" || x === "benelli leoncino" || x === "leoncino" || x === "leoncino 500") {
        window.open("./Html Pages/b- s- leoncino.html", "_self");
    }

    else if (x === "benelli trk 251" || x === "benelli trk" || x === "trk 250" || x === "250 trk") {
        window.open("./Html Pages/b-t -trk251.html", "_self");
    }

    else if (x === "benelli trk 502" || x === "benelli trk" || x === "trk 502" || x === "502 trk") {
        window.open("./Html Pages/b-t-trk 502.html", "_self");
    }

    else if (x === "benelli" || x === "benelli bike" || x === "beneli") {
        window.open("./Html Pages/benelli page.html", "_self");
    }



// Ducati Bike =====================================>
    else if (x === "ducati diavel 1250s" || x === "diavel 1250s" || x === "diavel" || x === "1260s diavel") {
        window.open("./Html Pages/D-diavel 1260 s.html", "_self");
    }

    else if (x === "ducati monster" || x === "monster" || x === "monster ducati") {
        window.open("./Html Pages/D- monster+.html", "_self");
    }

    else if (x === "ducati multistrata v4" || x === "multistrata v4" || x === "ducati multistrata" || x === "multistrata") {
        window.open("./Html Pages/D- multistrada v4.html", "_self");
    }

    else if (x === "ducati streetfighter v4s" || x === "streetfighter v4s" || x === "ducati streetfighter") {
        window.open("./Html Pages/D-streetfighter v4 s.html", "_self");
    }

    else if (x === "ducati xdiavel blackstar" || x === "xdiavel blackstar" || x === "ducati xdiavel" || x === "blackstar") {
        window.open("./Html Pages/D-xdiavel blackstar .html", "_self");
    }

    else if (x === "ducati" || x === "dukati" || x === "bucati") {
        window.open("./Html Pages/Ducati page.html", "_self");
    }



// Harley Davidson Bike =====================================>
    else if (x === "harley davidson america 1250" || x === "hd america 1250" || x === "hd america" || x === "america 1250" ) {
        window.open("./Html Pages/HD-adventure Touring -pan america 1250.html", "_self");
    }

    else if (x === "harley davidson iron 883" || x === "hd iron 883" || x === "iron 883") {
        window.open("./Html Pages/HD-cruiser-irony 883.html", "_self");
    }

    else if (x === "harley davidson roadking" || x === "hd roadkin" || x === "roadking") {
        window.open("./Html Pages/HD-touring-Roadking.html", "_self");
    }

    else if (x === "harley davidson sportster" || x === "sportster" || x === "hd sportster") {
        window.open("./Html Pages/HD-sportster s.html", "_self");
    }

    else if (x === "harley davidson" || x === "hd" || x === "harley" || x === "davidson") {
        window.open("./Html Pages/HD PAGE .html", "_self");
    }



// Honda Bike =====================================>
    else if (x === "honda cb500x" || x === "cb500x" || x === "cb500" || x === "honda cb") {
        window.open("./Html Pages/H-CB 500X.html", "_self");
    }

    else if (x === "honda cb650r" || x === "cb650r" || x === "650r" || x === "honda 650r") {
        window.open("./Html Pages/H-cb 650R.html", "_self");
    }

    else if (x === "honda cbr650r" || x === "cbr650r" || x === "650r" || x === "cbr") {
        window.open("./Html Pages/h- cbr 650r.html", "_self");
    }

    else if (x === "honda cbr1000rrr" || x === "cbr1000" || x === "cbr1000rr" || x === "1000rrr") {
        window.open("./Html Pages/h - cbr 1000RR-R.html", "_self");
    }

    else if (x === "honda goldwing" || x === "goldwing") {
        window.open("./Html Pages/H- GOLD WING TOUR.html", "_self");
    }

    else if (x === "honda" || x === "honda bike" || x === "hoda" || x === "hond") {
        window.open("./Html Pages/honda page.html", "_self");
    }
    


// Kawasaki Bike =====================================>
    else if (x === "kawasaki 1000sx" || x === "1000sx" || x === "kawa 1000sx" || x === "kawasaki1000sx") {
        window.open("./Html Pages/K- Ninja 1000sx.html", "_self");
    }

    else if (x === "kawasaki k h2 se" || x === "kawasaki kh2se" || x === "h2 se" || x === "k h2 se") {
        window.open("./Html Pages/K-Z H2 SE.html", "_self");
    }

    else if (x === "kawasaki kx100" || x === "kx100" || x === "kawasaki 100" || x === "kawasaki kx") {
        window.open("./Html Pages/K- KX 100.html", "_self");
    }

    else if (x === "kawasaki versys 1000" || x === "kawasaki versys" || x === "versys" || x === "verys") {
        window.open("./Html Pages/K-VERSYS 1000.Html", "_self");
    }

    else if (x === "kawasaki z h2" || x === "kawasaki zh2" || x === "z h2" || x === "kawasaki z") {
        window.open("./Html Pages/K-Z H2 SE.html", "_self");
    }

    else if (x === "kawasaki" || x === "kawasaki bike" || x === "ninja" || x === "kawasaki ninja") {
        window.open("./Html Pages/kawasaki page.html", "_self");
    }



// Royal Enfield Bike =====================================>
    else if (x === "royal enfield classic 350" || x === "royal enfield classic" || x === "classic 350" || x === "royalenfield classic") {
        window.open("./Html Pages/RE classic 350.html", "_self");
    }

    else if (x === "royal enfield gt 650" || x === "royalenfield gt" || x === "royal enfield gt" || x === "gt 650") {
        window.open("./Html Pages/RE  continental gt 650.html", "_self");
    }

    else if (x === "royal enfield interceptor 650" || x === "interceptor 650" || x === "interceptor" || x === "royal enfield interceptor") {
        window.open("./Html Pages/RE interceptor 650.html", "_self");
    }

    else if (x === "royal enfield meteor 350" || x === "royal enfield meteor" || x === "meteor 350" || x === "meteor") {
        window.open("./Html Pages/RE  meteor 350.html", "_self");
    }

    else if (x === "royal enfield scram 411" || x === "scram 411" || x === "scram" || x === "royal enfield scram") {
        window.open("./Html Pages/RE- scram  411.html", "_self");
    }

    else if (x === "royal enfield" || x === "royal enfield bike" || x === "re bikes" || x === "royal") {
        window.open("./Html Pages/royal enfied page.html", "_self");
    }



// Yahama Bike =====================================>
    else if (x === "yahama fz s fi" || x === "fz s fi" || x === "yahama fz s" || x === "fz s") {
        window.open("./Html Pages/y-fz s.html", "_self");
    }

    else if (x === "yahama fz25" || x === "fz25" || x === "yahama fz" || x === "fz") {
        window.open("./Html Pages/y- FZ 25.html", "_self");
    }

    else if (x === "yahama mt 15 v2" || x === "yahama mt" || x === "mt15" || x === "mt15 v2") {
        window.open("./Html Pages/y MT -15.html", "_self");
    }

    else if (x === "yahama yzf r15 s" || x === "yzf r15s" || x === "yzf r15" || x === "r15 s") {
        window.open("./Html Pages/y -yzf R15 S .html", "_self");
    }

    else if (x === "yahama yzf r15 v4" || x === "yzf r15 v4" || x === "yahama r15 v4" || x === "r15 v4") {
        window.open("./Html Pages/y- yzf15v4.html", "_self");
    }

    else if (x === "yahama" || x === "yahama bikes" || x === "yahama bike") {
        window.open("./Html Pages/yamaha page.html", "_self");
    }

    



    else {
        window.open("./Html Pages/error.html", "_self");
    }

}

// ***** End Search Section ============================ 

// else if (x === "" || x === "" || x === "" || x === "") {
//     window.open("./Html Pages/", "_self");
// }