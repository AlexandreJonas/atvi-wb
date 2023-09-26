import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import ListagemProdutos from "../negocio/listagemProdutos";
import Empresa from "../modelo/empresa"

export default class DeleteProduto {
    private empresa: Empresa
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>, empresa: Empresa) {
        this.empresa = empresa
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do produto`);

        let listagem = new ListagemProdutos(this.empresa.getProdutos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do produto a ser excluído: `)
        this.produtos.splice(num - 1,1)
        console.log(`\nExclusão concluída :)\n`);
    }
}