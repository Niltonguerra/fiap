var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.fazerSom = function () {
        console.log("o animal faz um som ");
    };
    Animal.prototype.fazerBarulho = function () {
        console.log("".concat(this.nome, " faz um som"));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("O animal de quadro patas e um rabo de pele caramelo late");
    };
    Cachorro.prototype.latir = function () {
        console.log("".concat(this.nome, " late."));
    };
    return Cachorro;
}(Animal));
var teste = new Animal('gato');
var teste2 = new Cachorro('cachorro');
// teste.fazerSom();
// teste.fazerBarulho();
teste2.fazerSom();
teste2.fazerBarulho();
teste2.latir();
