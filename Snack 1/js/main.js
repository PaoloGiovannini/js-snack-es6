const biciDom = document.getElementById('bici')

const biciclette = [
    {
        nome: "bici rossa",
        peso: 5
    },
    {
        nome: "bici bianca",
        peso: 4
    },
    {
        nome: "bici gialla",
        peso: 7
    },
    {
        nome: "bici viola",
        peso: 3
    }
];
  
  let biciLeggera = biciclette[0];
  
  biciclette.forEach(elementoCorrente => {
    console.log(elementoCorrente);
    const {peso} = elementoCorrente;
    console.log(peso);
    if(peso <= biciLeggera.peso) {
      biciLeggera = elementoCorrente;
    }
  });
  
  biciDom.innerHTML = `La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`;

