const squadre = [
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Cremonese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Albinoleffe',
        puntiFatti: 0,
        falliSubiti: 0
    }
];



squadre.forEach(elemento => {
    elemento.puntiFatti = generNumeroCasuale(1, 70);
    elemento.falliSubiti = generNumeroCasuale(1, 20);
  });

const arrayNomiEFalli = squadre.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti};
});

console.log(arrayNomiEFalli);
console.log(squadre);


function generNumeroCasuale (min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}