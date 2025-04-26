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

  //POO => Programação orientada a objeto

  //Escolha da equipe e exibição de suas respectivas informações

  class Equipe {
    constructor(
      nomeEquipe,
      corEquipe,
      posicao,
      cursos,
      entidadeEscolhida,
      nomeMascote,
      padrinho,
      imgMascote, 
      descricaoEntidade,
      descricaoHomenageado,
      imgHomenageado,
      homenageado
    ) {
      this.nomeEquipe = nomeEquipe;
      this.corEquipe = corEquipe;
      this.posicao = posicao;
      this.cursos = cursos;
      this.entidadeEscolhida = entidadeEscolhida;
      this.nomeMascote = nomeMascote;
      this.padrinho = padrinho;
      this.imgMascote = imgMascote;
      this.descricaoEntidade = descricaoEntidade;
      this.descricaoHomenageado = descricaoHomenageado;
      this.imgHomenageado = imgHomenageado;
      this.homenageado = homenageado
    }
  }

  const equipes = {
      Laranja : new Equipe(
        "Laranja",
        "#FF6F00",
        "1º lugar",
        "Matemática, Letras e Engenharia de software",
        "Lar São Vicente de Paulo",
        "Lorax",
        "Leticia Chaves, Priscila Pena e Carlos Lucas",
        "../img/imgMascoteLaranja.png",
        "O Departamento de Promoção Vicentina, também conhecido como Lar São Vicente de Paulo, é uma Obra Unida à Sociedade de São Vicente de Paulo, e foi constituído em 02 de janeiro de 1982. É uma associação de direito privado, filantrópica, beneficente, sem fins econômicos, de assistência social, com natureza de Instituição de Longa Permanência para Idosos (ILPI), de duração por tempo indeterminado, com personalidade jurídica distinta de seus membros.",
        "Gabriela Vergilio, triatleta amadora e educadora física, bicampeã brasileira e paulista na sua categoria, com participação em dois campeonatos mundiais.",
        "../img/imgHomenageadoLaranja.png",
        "Gabriela Vergilio"
      ),
      Preta : new Equipe(
        "Preta",
        "#000",
        "5º lugar",
        "Medicina e Enfermagem",
        "Berçário Dona Nina",
        "Edna",
        "Daniel Martins, Márcia Urquiza e Márcia Giacomini",
        "../img/imgMascotePreto.png",
        "A fundação do berçário foi um sonho de Eulina da Silveira Borissi, conhecida como Dona Nina, que surgiu devido ao estado de miséria e a falta de condições de higiene para que gestações ocorressem de maneira saudável. A partir de então, se dedicou a mobilizar recursos e voluntários para auxiliá-la nessa empreitada. O Berçário Dona Nina é uma instituição não governamental, sem fins lucrativos, e depende de doações para que as atividades possam continuar em funcionamento.",
        "Denilson Seixas, técnico de handebol e profissional atuante na formação de jovens atletas, além de já ter conduzido a tocha olímpica em Franca.",
        "../img/imgHomenageadoPreto.png",
        "Denilson Seixas"
      ),
      Roxa : new Equipe(
        "Roxa",
        "#6E079A",
        "2º lugar",
        "Comunic. Social - PP, Sistemas de Informação e Ciência da Computação",
        "Associação Caminhar",
        "Ravena",
        "Nilton Pereira, Fábio Faria e Márcio Funes",
        "../img/imgMascoteRoxo.png",
        "A CAMINHAR – Associação das Famílias, Pessoas e Portadores de Paralisia Cerebral de Franca é uma Organização da Sociedade Civil, que foi constituída em 07/04/1997, ou seja, há 28 anos, na cidade de Franca, por profissionais, famílias e pessoas com deficiência que buscavam um atendimento especializado para as deficiências múltiplas ocasionadas pela paralisia cerebral. Formou-se a Associação com a colaboração voluntária de várias pessoas e o trabalho iniciou com bastantes dificuldades.",
        "Manuela Cintra Archeti, atleta de beach tennis, com passagens pela Seleção Brasileira e títulos internacionais, como tricampeã Pan-Americana Sub-18.",
        "../img/imgHomenageadoRoxo.png",
        "Manuela Archeti"
      ),
      Verde : new Equipe(
        "Verde",
        "#3BC700",
        "3º lugar",
        "Engenharia de Produção, Engenharia Civil e Psicologia",
        "Instituição espírita Nosso Lar",
        "Mike Wazowski",
        "João Vitor, Leandro Conterato e Sofia Graciolli",
        "../img/imgMascoteVerde.png",
        "Atualmente a Instituição Espírita Nosso Lar atende 55 (cinquenta e cinco) idosos, do sexo feminino, com idade igual ou superior a sessenta anos, do município de Franca, em situação de vulnerabilidade social. Assim, o atual “Lar Dona Leonor” vem atendendo nos moldes da caridade cristã e de acordo com as normas políticas e legislativas voltadas ao bem estar do idoso.",
        "Estêvão Willian, jogador profissional do Palmeiras, convocado para a Seleção Brasileira e destaque no futebol nacional com recordes em desempenho aos 17 anos.",
        "../img/imgHomenageadoVerde.webp",
        "Estevão Willian"
      ),
      Vermelha : new Equipe(
        "Vermelha",
        "#D90026",
        "4º lugar",
        "Administração e Ciências Contábeis",
        "Pestalozzi - Unidade II",
        "Relâmpago McQuenn",
        "Thalisa Gilberto, Mário Chagas e Cyro Durigan",
        "../img/imgMascoteVermelho.png",
        "A Escola Pestalozzi Unidade II, é mantida pela Fundação Educandário Pestalozzi, entidade jurídica de direito privado e finalidades filantrópicas. Executora dos projetos sociais idealizados pela Fundação, desenvolve desde 1983 o Projeto Lar-Escola, que atende a crianças de 4 a 10 anos, em período integral, através da concessão de Bolsas Escolares e desenvolvimento de ações educativas complementares no período contrário ao escolar, além de oferecer alimentação, material didático e pedagógico e uniformes escolares. Todo este atendimento é prestado de forma totalmente gratuito às crianças de baixa renda ou em situações de vulnerabilidades sociais.",
        "Diego Galante, atleta olímpico e instrutor de jiu-jitsu, hexacampeão brasileiro e bicampeão mundial.",
        "../img/imgHomenageadoVermelho.jpeg",
        "Diego Galante"
      )
  }

  //Função para mostrar a cor de acordo com a equipe
  function mostrarEquipe(cor) {
    const equipe = equipes[cor];
  
    const container = document.getElementById('info-equipe');
    container.innerHTML = `
      <div class="container">
        <section>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center">
              <div class="containerImgMascote">
                <img src="${equipe.imgMascote}" alt="Mascote da equipe" style="max-width: 80%; max-height: 80%; object-fit: contain" />
              </div>
            </div>
            <div class="col-md-6" style="margin: auto">
              <p class="titleEquipe" style="color: ${equipe.corEquipe}">
                  Equipe ${equipe.nomeEquipe}
              </p>
              <p class="atributosEquipe">
                <strong>Posição:</strong> ${equipe.posicao}
              </p>
              <p class="atributosEquipe">
                <strong>Cursos:</strong> ${equipe.cursos}
              </p>
              <p class="atributosEquipe">
                <strong>Entidade escolhida:</strong> ${equipe.entidadeEscolhida}
              </p>
              <p class="atributosEquipe">
                <strong>Homenageado escolhido:</strong> ${equipe.homenageado}
              </p>
              <p class="atributosEquipe">
                <strong>Nome do mascote:</strong> ${equipe.nomeMascote}
              </p>
              <p class="atributosEquipe">
                <strong>Padrinhos:</strong> ${equipe.padrinho}
              </p>
            </div>
          </div>
            <div class="container">
              <section style="margin-top: 50px; margin-left: 100px">
                <div>
                  <p style="font-size: 1.5rem; font-weight: 900; font-family: Raleway">
                    ${equipe.entidadeEscolhida}
                  </p>
                  <p style="width: 70%; text-align: justify">
                    ${equipe.descricaoEntidade}
                  </p>
                </div>
          </section>
            </div>
            <div class="container">
              <div class="row" style="margin-top: 50px; margin-left: 100px">
                <div class="col-md-6 d-flex align-items-center">
                  <section>
                    <p style="font-size: 1.5rem; font-weight: 900; font-family: Raleway">
                      ${equipe.homenageado}
                    </p>
                    <p style="width: 80%">
                      ${equipe.descricaoHomenageado}
                    </p>
                  </section>
                </div>
                <div class="col-md-6 d-flex align-items-center" style="margin: auto">
                  <div class="containerImgHomenageado">
                    <img src="${equipe.imgHomenageado}" alt="Homenageado da Equipe" style="max-width: 90%; max-height: 90%; object-fit: contain" />
                  </div>
                </div>
              </div>
            </div>
      </div>
    `;
  }
  