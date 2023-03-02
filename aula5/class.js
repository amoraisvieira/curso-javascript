//Objeto
const Livro = function(nome, editora, paginas){
    gNome = nome;
    gEditora = editora;
    gPaginas = paginas;

    this.getNome = function(){
        return gNome;
    }

    this.getEditora = function(){
        return gEditora;
    }

    this.getPaginas = function(){
        return gPaginas;
    }
}

const estruturasDados = new Livro("Estrutura de Dados com Javascript", "Novatec", 400);

console.log(estruturasDados.getNome());
console.log(estruturasDados.getEditora());
console.log(estruturasDados.getPaginas()); 

//Classe
class Livro2{
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }

    anunciarTitulo(){
        console.log(`O título é: ${this.nome}.`);
    }

    anunciarDescricao(){
        console.log(`A editora é ${this.editora} e tem ${this.paginas} de páginas.`);
    }
}

const NodeJs = new Livro2("Primeiros passos com Node Js", "Novatec", 500);
NodeJs.anunciarTitulo();
NodeJs.anunciarDescricao();

//Herdando uma classe
class LivroColecao extends Livro2{
    constructor(nome, nomeColecao){
        super(nome);

        this.nomeColecao = nomeColecao;
    }

    anunciarColecao(){
        console.log(`O livro ${this.nome} é da coleção ${this.nomeColecao}`);
    }
}

const Angular = new LivroColecao("Angular", "Front end");
Angular.anunciarColecao();