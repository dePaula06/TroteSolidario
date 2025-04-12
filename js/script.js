function toggleMenu() {
  document.querySelector(".nav-left").classList.toggle("active");
}

function calcular() {
  //Função para poder deixar o botão de cálculo dentro do form e ele não recarregar
  event.preventDefault();

  //Declarando variáveis
  let soma,
    equipe,
    kits,
    suplementos,
    pontosKitSuplemento,
    arroz5kg,
    arroz1kg,
    feijao2kg,
    feijao1kg,
    macarrao,
    oleo,
    pontosAlimentos,
    leite,
    doacaoSangue,
    pontosDoacaoSangue,
    acaoSocial,
    homenagem,
    mascote,
    atividadesRecreativas,
    caracterizacaoAnimacao;

  //Capturando valores e convertendo em números
  equipe = document.getElementById("equipe").value;

  kits = document.getElementById("kits").value;
  kits = Number(kits);

  suplementos = document.getElementById("suplementos").value;
  suplementos = Number(suplementos);

  arroz5kg = document.getElementById("arroz5kg").value;
  arroz5kg = Number(arroz5kg);

  arroz1kg = document.getElementById("arroz1kg").value;
  arroz1kg = Number(arroz1kg);

  feijao2kg = document.getElementById("feijao2kg").value;
  feijao2kg = Number(feijao2kg);

  feijao1kg = document.getElementById("feijao1kg").value;
  feijao1kg = Number(feijao1kg);

  macarrao = document.getElementById("macarrao").value;
  macarrao = Number(macarrao);

  oleo = document.getElementById("oleo").value;
  oleo = Number(oleo);

  leite = document.getElementById("leite").value;
  leite = Number(leite);

  doacaoSangue = document.getElementById("doacaoSangue").value;
  doacaoSangue = Number(doacaoSangue);

  acaoSocial = document.getElementById("acaoSocial").value;
  acaoSocial = Number(acaoSocial);

  homenagem = document.getElementById("homenagem").value;
  homenagem = Number(homenagem);

  mascote = document.getElementById("mascote").value;
  mascote = Number(mascote);

  atividadesRecreativas = document.getElementById(
    "atividadesRecreativas"
  ).value;
  atividadesRecreativas = Number(atividadesRecreativas);

  caracterizacaoAnimacao = document.getElementById(
    "caracterizacaoAnimacao"
  ).value;
  caracterizacaoAnimacao = Number(caracterizacaoAnimacao);

  //Calculando pontuação dos kits e suplementos de acordo com a equipe
  if (equipe == "Laranja") {
    if (kits >= 97 && suplementos >= 49) {
      pontosKitSuplemento = 5000 + (kits - 97) * 30 + (suplementos - 49) * 15;
    } else if (kits >= 78 && suplementos >= 39) {
      pontosKitSuplemento = 4000 + (kits - 78) * 30 + (suplementos - 39) * 15;
    } else if (kits >= 49 && suplementos >= 25) {
      pontosKitSuplemento = 2500 + (kits - 49) * 30 + (suplementos - 25) * 15;
    } else if (kits >= 19 && suplementos >= 10) {
      pontosKitSuplemento = 1000 + (kits - 19) * 30 + (suplementos - 10) * 15;
    } else {
      pontosKitSuplemento = 0;
    }
  } else if (equipe == "Preta") {
    if (kits >= 103 && suplementos >= 52) {
      pontosKitSuplemento = 5000 + (kits - 103) * 30 + (suplementos - 52) * 15;
    } else if (kits >= 82 && suplementos >= 42) {
      pontosKitSuplemento = 4000 + (kits - 82) * 30 + (suplementos - 42) * 15;
    } else if (kits >= 52 && suplementos >= 26) {
      pontosKitSuplemento = 2500 + (kits - 52) * 30 + (suplementos - 26) * 15;
    } else if (kits >= 21 && suplementos >= 10) {
      pontosKitSuplemento = 1000 + (kits - 21) * 30 + (suplementos - 10) * 15;
    } else {
      pontosKitSuplemento = 0;
    }
  } else if (equipe == "Roxa") {
    if (kits >= 102 && suplementos >= 51) {
      pontosKitSuplemento = 5000 + (kits - 102) * 30 + (suplementos - 51) * 15;
    } else if (kits >= 82 && suplementos >= 41) {
      pontosKitSuplemento = 4000 + (kits - 82) * 30 + (suplementos - 41) * 15;
    } else if (kits >= 51 && suplementos >= 26) {
      pontosKitSuplemento = 2500 + (kits - 51) * 30 + (suplementos - 26) * 15;
    } else if (kits >= 20 && suplementos >= 10) {
      pontosKitSuplemento = 1000 + (kits - 20) * 30 + (suplementos - 10) * 15;
    } else {
      pontosKitSuplemento = 0;
    }
  } else if (equipe == "Verde") {
    if (kits >= 88 && suplementos >= 44) {
      pontosKitSuplemento = 5000 + (kits - 88) * 30 + (suplementos - 44) * 15;
    } else if (kits >= 70 && suplementos >= 35) {
      pontosKitSuplemento = 4000 + (kits - 70) * 30 + (suplementos - 35) * 15;
    } else if (kits >= 44 && suplementos >= 22) {
      pontosKitSuplemento = 2500 + (kits - 44) * 30 + (suplementos - 22) * 15;
    } else if (kits >= 18 && suplementos >= 9) {
      pontosKitSuplemento = 1000 + (kits - 18) * 30 + (suplementos - 9) * 15;
    } else {
      pontosKitSuplemento = 0;
    }
  } else {
    if (kits >= 93 && suplementos >= 47) {
      pontosKitSuplemento = 5000 + (kits - 93) * 30 + (suplementos - 47) * 15;
    } else if (kits >= 74 && suplementos >= 38) {
      pontosKitSuplemento = 4000 + (kits - 74) * 30 + (suplementos - 38) * 15;
    } else if (kits >= 47 && suplementos >= 24) {
      pontosKitSuplemento = 2500 + (kits - 47) * 30 + (suplementos - 24) * 15;
    } else if (kits >= 19 && suplementos >= 9) {
      pontosKitSuplemento = 1000 + (kits - 19) * 30 + (suplementos - 9) * 15;
    } else {
      pontosKitSuplemento = 0;
    }
  }

  //Calculando alimentos sortidos de acordo com a equipe
  if (equipe == "Laranja") {
    if (kits >= 97 && suplementos >= 49) {
      arroz5kg = arroz5kg * 5;
      arroz1kg = arroz1kg * 1;
      feijao2kg = feijao2kg * 2;
      feijao1kg = feijao1kg * 1;
      macarrao = macarrao * 0.5;
      oleo = oleo * 1;
    } else {
      arroz5kg = 0;
      arroz1kg = 0;
      feijao2kg = 0;
      feijao1kg = 0;
      macarrao = 0;
      oleo = 0;
    }
  } else if (equipe == "Preta") {
    if (kits >= 103 && suplementos >= 52) {
      arroz5kg = arroz5kg * 5;
      arroz1kg = arroz1kg * 1;
      feijao2kg = feijao2kg * 2;
      feijao1kg = feijao1kg * 1;
      macarrao = macarrao * 0.5;
      oleo = oleo * 1;
    } else {
      arroz5kg = 0;
      arroz1kg = 0;
      feijao2kg = 0;
      feijao1kg = 0;
      macarrao = 0;
      oleo = 0;
    }
  } else if (equipe == "Roxa") {
    if (kits >= 102 && suplementos >= 51) {
      arroz5kg = arroz5kg * 5;
      arroz1kg = arroz1kg * 1;
      feijao2kg = feijao2kg * 2;
      feijao1kg = feijao1kg * 1;
      macarrao = macarrao * 0.5;
      oleo = oleo * 1;
    } else {
      arroz5kg = 0;
      arroz1kg = 0;
      feijao2kg = 0;
      feijao1kg = 0;
      macarrao = 0;
      oleo = 0;
    }
  } else if (equipe == "Verde") {
    if (kits >= 88 && suplementos >= 44) {
      arroz5kg = arroz5kg * 5;
      arroz1kg = arroz1kg * 1;
      feijao2kg = feijao2kg * 2;
      feijao1kg = feijao1kg * 1;
      macarrao = macarrao * 0.5;
      oleo = oleo * 1;
    } else {
      arroz5kg = 0;
      arroz1kg = 0;
      feijao2kg = 0;
      feijao1kg = 0;
      macarrao = 0;
      oleo = 0;
    }
  } else if (equipe == "Vermelha") {
    if (kits >= 93 && suplementos >= 47) {
      arroz5kg = arroz5kg * 5;
      arroz1kg = arroz1kg * 1;
      feijao2kg = feijao2kg * 2;
      feijao1kg = feijao1kg * 1;
      macarrao = macarrao * 0.5;
      oleo = oleo * 1;
    } else {
      arroz5kg = 0;
      arroz1kg = 0;
      feijao2kg = 0;
      feijao1kg = 0;
      macarrao = 0;
      oleo = 0;
    }
  } else {
    arroz5kg = 0;
    arroz1kg = 0;
    feijao2kg = 0;
    feijao1kg = 0;
    macarrao = 0;
    oleo = 0;
  }

  pontosAlimentos =
    arroz5kg + arroz1kg + feijao2kg + feijao1kg + macarrao + oleo;

  //Calculando doações de sangue de acordo com a equipe

  if (equipe == "Laranja") {
    if (doacaoSangue >= 49) {
      pontosDoacaoSangue = 2500 + (doacaoSangue - 49) * 20;
    } else {
      pontosDoacaoSangue = doacaoSangue * 20;
    }
  } else if (equipe == "Preta") {
    if (doacaoSangue >= 52) {
      pontosDoacaoSangue = 2500 + (doacaoSangue - 52) * 20;
    } else {
      pontosDoacaoSangue = doacaoSangue * 20;
    }
  } else if (equipe == "Roxa") {
    if (doacaoSangue >= 51) {
      pontosDoacaoSangue = 2500 + (doacaoSangue - 51) * 20;
    } else {
      pontosDoacaoSangue = doacaoSangue * 20;
    }
  } else if (equipe == "Verde") {
    if (doacaoSangue >= 44) {
      pontosDoacaoSangue = 2500 + (doacaoSangue - 44) * 20;
    } else {
      pontosDoacaoSangue = doacaoSangue * 20;
    }
  } else {
    if (doacaoSangue >= 47) {
      pontosDoacaoSangue = 2500 + (doacaoSangue - 47) * 20;
    } else {
      pontosDoacaoSangue = doacaoSangue * 20;
    }
  }

  //Calculando leite
  leite = leite * 2;

  // Calculando a pontuação final
  soma =
    pontosKitSuplemento +
    pontosAlimentos +
    pontosDoacaoSangue +
    leite +
    acaoSocial +
    homenagem +
    mascote +
    atividadesRecreativas +
    caracterizacaoAnimacao;

  // Cores por equipe
  const coresEquipe = {
    Laranja: "#FF6F00",
    Preta: "#000",
    Roxa: "#6E079A",
    Verde: "#3BC700",
    Vermelha: "#D90026"
  };

  // Calcular altura da barra (máximo visual de 150px)
  const alturaMaxima = 1000;
  let alturaBarra = Math.min((soma / 15000) * alturaMaxima, alturaMaxima);
  alturaBarra = alturaBarra < 0 ? 0 : alturaBarra;

  // Aplicar no DOM
  const barra = document.getElementById("barraPontuacao");
  barra.style.height = `${alturaBarra}px`;
  barra.style.backgroundColor = coresEquipe[equipe] || "#BDBDBD"; // cor padrão

  //Retornando valor
  document.getElementById("soma").innerHTML = `${soma} pts`;
}

function reloading() {
    location.reload();
  }