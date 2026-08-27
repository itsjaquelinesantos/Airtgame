// Guarda a quantidade de pontos que o jogador fez.
// No começo do jogo, a pontuação começa em zero.
let pontos = 0;


// ================= FUNÇÃO AUXILIAR =================

// Essa função serve para desativar os botões
// depois que o jogador responde uma rodada.
// Assim ele não consegue clicar várias vezes
// e ganhar pontos indevidamente.

function desabilitarBotoes(id){

    // Procura todos os botões dentro da rodada escolhida
    document.querySelectorAll("#" + id + " button")

    // Para cada botão encontrado...
    .forEach(botao => {

        // Bloqueia o botão
        botao.disabled = true;

    });

}


// ================= RODADA 1 =================

function rodada1(escolha){

    // Desativa os botões da primeira rodada
    desabilitarBotoes("rodada1");

    // Verifica se a escolha foi a imagem da esquerda
    if(escolha == "esquerda"){

        // Adiciona um ponto ao jogador
        pontos++;

        // Mostra mensagem de acerto
        document.getElementById("resultado1").innerHTML =
        "✅ Você acertou! Essa imagem foi criada por IA.";

    }

    // Caso o jogador escolha a imagem errada
    else{

        // Mostra mensagem de erro
        document.getElementById("resultado1").innerHTML =
        "❌ Você errou! Essa imagem foi criada pelo artista Norman Rockwell.";

    }

    // Espera 2 segundos antes de mudar de rodada
    setTimeout(function(){

        // Esconde a primeira rodada
        document.getElementById("rodada1").style.display = "none";

        // Mostra a segunda rodada
        document.getElementById("rodada2").style.display = "block";

    }, 2000);

}


// ================= RODADA 2 =================

function rodada2(escolha){

    // Desativa os botões da segunda rodada
    desabilitarBotoes("rodada2");

    // Nesta rodada a imagem correta é a da direita
    if(escolha == "direita"){

        // Adiciona um ponto
        pontos++;

        // Mostra mensagem de acerto
        document.getElementById("resultado2").innerHTML =
        "✅ Você acertou! Essa imagem foi criada por IA.";

    }

    else{

        // Mostra mensagem de erro
        document.getElementById("resultado2").innerHTML =
        "❌ Você errou! Essa imagem foi criada por um pintor desconhecido durante a Idade Média.";

    }

    // Depois de 2 segundos muda para a terceira rodada
    setTimeout(function(){

        // Esconde a segunda rodada
        document.getElementById("rodada2").style.display = "none";

        // Mostra a terceira rodada
        document.getElementById("rodada3").style.display = "block";

    }, 2000);

}


// ================= RODADA 3 =================

function rodada3(escolha){

    // Desativa os botões da terceira rodada
    desabilitarBotoes("rodada3");

    // Nesta rodada a imagem correta é a da esquerda
    if(escolha == "esquerda"){

        // Adiciona um ponto
        pontos++;

        // Mostra mensagem de acerto
        document.getElementById("resultado3").innerHTML =
        "✅ Você acertou!";

    }

    else{

        // Mostra mensagem de erro
        document.getElementById("resultado3").innerHTML =
        "❌ Você errou! Essa imagem foi criada pelo pintor Van Gogh.";

    }

    // Após 2 segundos mostra a quarta rodada
    setTimeout(function(){

        // Esconde a terceira rodada
        document.getElementById("rodada3").style.display = "none";

        // Mostra a quarta rodada
        document.getElementById("rodada4").style.display = "block";

    }, 2000);

}


// ================= RODADA 4 =================

function rodada4(escolha){

    // Desativa os botões da quarta rodada
    desabilitarBotoes("rodada4");

    // Nesta rodada a imagem correta é a da esquerda
    if(escolha == "esquerda"){

        // Adiciona um ponto
        pontos++;

        // Mostra mensagem de acerto
        document.getElementById("resultado4").innerHTML =
        "✅ Você acertou! Essa imagem foi criada por IA.";

    }

    else{

        // Mostra mensagem de erro
        document.getElementById("resultado4").innerHTML =
        "❌ Você errou! Essa imagem foi criada pelo pintor Claude Monet.";

    }

    // Após 2 segundos mostra a quinta rodada
    setTimeout(function(){

        // Esconde a quarta rodada
        document.getElementById("rodada4").style.display = "none";

        // Mostra a quinta rodada
        document.getElementById("rodada5").style.display = "block";

    }, 2000);

}


// ================= RODADA 5 =================

function rodada5(escolha){

    // Desativa os botões da quinta rodada
    desabilitarBotoes("rodada5");

    // Nesta rodada a imagem correta é a da esquerda
    if(escolha == "esquerda"){

        // Adiciona um ponto
        pontos++;

        // Mostra mensagem de acerto
        document.getElementById("resultado5").innerHTML =
        "✅ Você acertou! Essa imagem foi criada por IA.";

    }

    else{

        // Mostra mensagem de erro
        document.getElementById("resultado5").innerHTML =
        "❌ Você errou! Essa imagem foi criada por Pablo Picasso.";

    }

    // Após 2 segundos mostra o resultado final
    setTimeout(function(){

        // Esconde a quinta rodada
        document.getElementById("rodada5").style.display = "none";

        // Mostra a pontuação final
        document.getElementById("pontuacao").innerHTML =

        "<h1>Fim do jogo!</h1>" +

        "<p>Você fez <strong>" + pontos +
        " de 5 pontos.</strong></p>";

    }, 2000);

}
