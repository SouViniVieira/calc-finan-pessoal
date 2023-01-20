document.getElementById("calcular").addEventListener("click", function () {
  var saldoAtual = parseFloat(
    document.getElementById("saldo-atual").value.replace("R$", "")
  );
  var gastosObrigatorios = parseFloat(
    document.getElementById("gastos-obrigatorios").value.replace("R$", "")
  );
  var dinheiroLazer = parseFloat(
    document.getElementById("dinheiro-lazer").value.replace("R$", "")
  );
  var investimento = parseFloat(
    document.getElementById("investimento").value.replace("R$", "")
  );
  var guardar = parseFloat(
    document.getElementById("guardar").value.replace("R$", "")
  );
  var totalGastos = gastosObrigatorios + dinheiroLazer + investimento + guardar;
  var resultado = saldoAtual - totalGastos;
  if (resultado > 0) {
    document.getElementById("card-resultado").innerHTML =
      "Você tem atualmente: " + resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("card-resultado").classList.remove("d-none");
    document.getElementById("card-resultado").style.display = "block";
  } else {
    document.getElementById("card-resultado").innerHTML =
      "Você tem atualmente: " + resultado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("card-resultado").style.display = "block";
  }
});

$(document).ready(function () {
  $("#saldo-atual").mask("R$ 999.999.999,99");
  $("#gastos-obrigatorios").mask("R$ 999.999.999,99");
  $("#dinheiro-lazer").mask("R$ 999.999.999,99");
  $("#investimento").mask("R$ 999.999.999,99");
  $("#guardar").mask("R$ 999.999.999,99");
});
