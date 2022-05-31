function calcular(gasPrice, kmLGas, etanolPrice, kmLEtanol) {
  if (kmLGas.length == 0 && kmLEtanol.length == 0) {
    alert(
      `Sem saber a autonomia do seu carro com cada tipo de combustível, levamos em conta a média que diz que o etanol tem autonomia 27% menor que a gasolina.`
    );
    return (etanolPrice / gasPrice) * 100;
  } else {
    let consGas = gasPrice / kmLGas;
    let consEta = etanolPrice / kmLEtanol;
    alert(
      `Seu carro gasta R$${consGas} por km na gasolina e R$${consEta} no etanol.`
    );
    console.log(consEta);
    console.log(consGas);
    if (consEta < consGas) {
      alert(`Nessas circunstâncias é melhor abastecer com etanol`);
    } else {
      alert(`Nessas circunstâncias é melhor abastecer com gasolina`);
    }
  }
}

function getNumber() {
  var gasPrice = document.getElementById('gasPrice').value;
  var kmLGas = document.getElementById('kmLGas').value;
  var etanolPrice = document.getElementById('etanolPrice').value;
  var kmLEtanol = document.getElementById('kmLEtanol').value;

  var numbers = calcular(gasPrice, kmLGas, etanolPrice, kmLEtanol);

  if (gasPrice < etanolPrice) {
    alert(
      `Nesse caso, com o etanol a R$${etanolPrice} e a gasolina a R$${gasPrice}, é melhor usar gasolina`
    );
  } else if (numbers > 73) {
    alert(
      `Nesse caso, com a gasolina a R$${gasPrice} e o etanol a R$${etanolPrice}, é melhor usar gasolina`
    );
  } else {
    alert(
      `Nesse caso, com o etanol a R$${etanolPrice} e a gasolina a R$${gasPrice}, é melhor usar etanol`
    );
  }
}
