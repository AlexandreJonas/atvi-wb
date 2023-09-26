import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        let n :number = 1
        this.produtos.forEach(produto => {
            console.log(`PRODUTO NÚMERO ` + n)
            console.log(`Nome: ` + produto.nome);
            console.log(`--------------------------------------`);
            n++
        });
        console.log(`\n`);
    }
}