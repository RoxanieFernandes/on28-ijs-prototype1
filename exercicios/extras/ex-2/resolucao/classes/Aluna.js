function Aluna(nome, matricula) {
  this.nome = nome;
  this.matricula = matricula;
  this.notas = [];
}

Aluna.prototype.adicionarNota = function (nota) {
	this.nota.push(nota)
};


// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])

// calcularMedia(): Este método calcula e retorna a média das notas da aluna.

Aluna.prototype.calcularMedia = function () {

}


// exibirInformacoes(): Este método exibe no console o nome, número de matrícula e média da aluna.
Aluna.prototype.exibirInformacoes = function () {
  
}

module.exports = { Aluna };
