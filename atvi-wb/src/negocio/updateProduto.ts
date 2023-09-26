import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import ListagemProdutos from "../negocio/listagemProdutos";
import Empresa from "../modelo/empresa"

export default class UpdateProduto {
    private empresa: Empresa
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\nInício da atualização do produto`);

        let listagem = new ListagemProdutos(this.empresa.getProdutos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do produto a ser atualizado: `)
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `)
        this.produtos[num-1].nome = nome
        console.log(`\n Atualização concluída :)\n`);
    }
}