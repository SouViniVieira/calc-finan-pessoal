$(document).ready(function () {
  $("input").on("input", function () {
    var valor = $(this).val();
    var novoValor = valor.replace(/\D/g, "");
    $(this).val(novoValor);
  });

  //Mascara para moedas.
  $("#saldo-atual").mask("R$ 999.999.999,99");
  $("#gastos-obrigatorios").mask("R$ 999.999.999,99");
  $("#dinheiro-lazer").mask("R$ 999.999.999,99");
  $("#investimento").mask("R$ 999.999.999,99");
  $("#guardar").mask("R$ 999.999.999,99");

  //Pega os valores de cada input, converte de string pra float, avalia se não está retornando nulo, calcula e então gera um card novo com o resultado.
  document.getElementById("calcular").addEventListener("click", function () {
    var saldoAtual = document.getElementById("saldo-atual").value;
    var gastosObrigatorios = document.getElementById(
      "gastos-obrigatorios"
    ).value;
    var dinheiroLazer = document.getElementById("dinheiro-lazer").value;
    var investimento = document.getElementById("investimento").value;
    var guardar = document.getElementById("guardar").value;
    saldoAtual = parseFloat(saldoAtual.replace(/[R$,]/g, ""));
    gastosObrigatorios = parseFloat(gastosObrigatorios.replace(/[R$,]/g, ""));
    dinheiroLazer = parseFloat(dinheiroLazer.replace(/[R$,]/g, ""));
    investimento = parseFloat(investimento.replace(/[R$,]/g, ""));
    guardar = parseFloat(guardar.replace(/[R$,]/g, ""));
    if (isNaN(saldoAtual)) saldoAtual = 0;
    if (isNaN(gastosObrigatorios)) gastosObrigatorios = 0;
    if (isNaN(dinheiroLazer)) dinheiroLazer = 0;
    if (isNaN(investimento)) investimento = 0;
    if (isNaN(guardar)) guardar = 0;
    var totalGastos = gastosObrigatorios + dinheiroLazer + investimento + guardar;
    var resultado = saldoAtual - totalGastos;
    if (resultado > 0) {
      document.getElementById("card-resultado").innerHTML =
        "Você tem atualmente: " +
        resultado.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      document.getElementById("card-resultado").classList.add("valor-destaque");
      document.getElementById("card-resultado").classList.remove("d-none");
      document.getElementById("card-resultado").style.display = "block";
    } else {
      document.getElementById("card-resultado").innerHTML =
        "Você tem atualmente: " +
        resultado.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      document.getElementById("card-resultado").classList.add("valor-destaque");
      document.getElementById("card-resultado").style.display = "block";
    }
  });
});

