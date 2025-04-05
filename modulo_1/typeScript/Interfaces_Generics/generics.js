// o T é melhor que o any
function primeiroElemento(arr) {
    return arr[0];
}
var numeros = primeiroElemento([1, 2, 3]);
var palavras = primeiroElemento(['olá', 'mundo', 1]);
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome) {
        this.nome = nome;
    }
    return Pessoa2;
}());
var CaixaNome = /** @class */ (function () {
    function CaixaNome(conteudo) {
        this.conteudo = conteudo;
    }
    return CaixaNome;
}());
var pessoa4 = new Pessoa2('joão');
var caixa = new CaixaNome(pessoa4);
console.log(caixa.conteudo.nome);
