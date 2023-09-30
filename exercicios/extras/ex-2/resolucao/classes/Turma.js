function Turma() {
  this.alunas = [];


  this.adicionarAluna = function (aluna) {
    this.alunas.push(aluna);
  };

  this.exibirListaAlunas = function () {
    this.alunas.forEach((aluna) => {
      console.log(`nome: ${aluna.nome} | matrícula: ${aluna.matricula}`);
    });
  };

}

module.exports = { Turma };
