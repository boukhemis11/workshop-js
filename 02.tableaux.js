console.log("02 - Tableaux");

var villes = new Array("nantes", "paris", "saint-nazaire", "angers", "le mans");

villes.forEach(function (element) {
    console.log(element);
});

var lettreADansToutesLesVilles = villes.every(function (element) {
    return element.includes("a");
});

console.log("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = villes.some(function (element) {
    return element.includes("-");
});

console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function (element) {
    return !element.includes(" ") && !element.includes("-");
});

console.log("villesSansTiretSansEspace = " + villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function (element) {
    return element.endsWith("s");
}).map(function (element) {
    return element.toUpperCase();
});

console.log("villesMajusculeSeTerminantParS = " + villesMajusculeSeTerminantParS);