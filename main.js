window.addEventListener("load", init);

function init() {
    console.log("Helló");

    const articleElem = document.querySelectorAll("#tarolo");
    console.log(articleElem)
    articleElem.innerHTML = "<h1>A legjobb dolgok</h1>";
    const list = [
        {
            nev: "Maja",
            mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        },
        {
            nev: "Szandi",
            mondat: "Tudtam ültetni és van két virágom.",
        },
        {   nev: "Trapi", 
            mondat: "Sikerült a Feast 1 teszt!" 
        },
        {   nev: "Ernő", 
            mondat: "Tegnap kialaudtam magam," 
        },
        {   nev: "Bálint", 
            mondat: "Kupcsik tanarnő vicces volt," 
        },
        {
            nev: "Arnold",
            mondat: "Lebetegedtem",
        },
        {
            nev: "Benedek",
            mondat: "Tegnapi adatbázis-kezelés",
        },
        {
            nev: "Balázs",
            mondat: "Újra elövettem egy régi játékot, amivel már rég játszottam és nosztalgikus érzéseket vált ki.",
        },
        {   nev: "Duy", 
            mondat: "Felfrissít az edzés minden héten." },
    ];
    megjelenit(list, articleElem);
    const Szuloelem = document.querySelectorAll("section");
    megjelenit2(list, Szuloelem);

}


function megjelenit(list, articleElem) {
    let txt ="<ul>";
    for (let index = 0; index < list.length; index++) {
        txt +=  "<li>" + list[index].mondat  + "</li>";
    }
    txt += "</ul>";
    articleElem[0].innerHTML += txt;

 

}


function megjelenit2(list, Szuloelem) {
    let text = "";
    for (let index = 0; index < list.length; index++) {
        text +=  "<div>" + "<h3>" + list[index].nev  + "</h3>" + "<p>" +  list[index].mondat + "</p>" + "</div>";
    }
    Szuloelem[0].innerHTML += text;

}