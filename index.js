let nomeHeroi = "Dylan";
let xpHeroi = 4060;
let nivel;
if (xpHeroi <= 1000) {
    nivel = "Ferro" ;
}
else if (xpHeroi <= 2000){
    nivel = "Bronze" ;
}
else if (xpHeroi <= 5000){
    nivel = "Prata" ;
}
else if (xpHeroi <= 7000){
    nivel = "Ouro" ;
}
else if (xpHeroi <= 8000){
    nivel = "Platina" ;
}
else if (xpHeroi <= 9000){
    nivel = "Ascendente" ;
}
else if (xpHeroi <= 10000){
    nivel = "Imortal" ;
}
else {
    nivel = "Radiante" ;
}



console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`)