class Animal {
  nome:string;

  constructor(nome:string){
    this.nome = nome;
  }

  fazerSom(){
    console.log("o animal faz um som ")
  }

  fazerBarulho(){
    console.log(`${this.nome} faz um som`);
  }
}

class Cachorro extends Animal {
  fazerSom(){
    console.log("O animal de quadro patas e um rabo de pele caramelo late")
  }
  latir(){
    console.log(`${this.nome} late.`)
  }
}

const teste = new Animal('gato')

const teste2 = new Cachorro('cachorro')

teste.fazerSom();
teste.fazerBarulho();

teste2.fazerSom()
teste2.fazerBarulho()
teste2.latir()
