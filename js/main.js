// Contador de palavras
var frase = $("#frase").text();
var qntPalavras = frase.split(" ").length - 47;
$("#tamanho-frase").text(qntPalavras);

// controlando o tempo ao jogo
$(document).ready(function(){

  var tempoInicial = 15;
  
  var tempoJogo = $("#tempo-jogo");
  tempoJogo.text(tempoInicial);
  
  var campo = $('.box-text');
  campo.on("focus", function(){
    var cronometro = setInterval(function(){
      var tempoRestante = tempoJogo.text();
      
      if(tempoRestante <= 0){
        campo.attr("disabled", true);
        clearInterval(cronometro);
        salvarProgresso();
      } else {
        tempoRestante--;
        console.log(tempoRestante);
        tempoJogo.text(tempoRestante);
      }
    }, 1000);
  });
})
  
// Contador de Caracteres e Palavras Digitadas
$(document).on("input", ".box-text", function() {
  // Caracteres
  var caracteresDigitados = $(".box-text").val().length;
  $("#caracteres-digitados").text(caracteresDigitados);

  // Palavras 
  var palavrasDigitadas = $(this).val();
  var QntPalavrasDigitadas = palavrasDigitadas.split(" ").length;
  $("#palavras-digitadas").text(QntPalavrasDigitadas);

});


// Reset Game
var campo = $(".box-text");
$(".reload").on("click", function() {
  campo.attr("disabled", false);
  campo.val("");
  $("#caracteres-digitados").text("0");
  $("#palavras-digitadas").text("0");
  $("#tempo-jogo").text(15);
  // start();
});


  // Salvando Progresso
  $(document).ready(function() {

    salvarProgresso = ()  => {
      var nome = prompt("Digite seu nome");

      var palavrasDigitadas = $(".box-text").val();
      var QntPalavrasDigitadas = palavrasDigitadas.split(" ").length;
      
      let ppm = QntPalavrasDigitadas * 4 + " ppm";
      
      $(".score > tbody")
        .append(`
          <tr class="player">
            <td><div> ${nome} </div><hr></td>
            <td><div> ${ppm} </div><hr></td>
            <td>
              <div>
                <button class="delete-row">
                  <img src="/icons/lixeira.png" alt="">
                </button>
              </div>
              <hr>
            </td>
          </tr>
      `);
      }
  
    // Procura o remove a linha selecionada da tabela
    $(".score").on("click", ".delete-row", function(){
      $(this).closest("tr").remove();
    });
  
  });
