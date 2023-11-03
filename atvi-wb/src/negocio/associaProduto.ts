import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import ListagemClientes from "./listagemClientes";
import ListagemProdutos from "./listagemProdutos";

export default class AssociaProduto {
    private empresa:Empresa
    private produtos:Array<Produto>
    private clientes:Array<Cliente>
    private entrada: Entrada

    constructor(empresa:Empresa)
    {
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }

    public associar(): void 
    {
        console.log(`\nInício da associação do produto`)

        let listagem = new ListagemProdutos(this.produtos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do produto a ser associado: `)

        let listagemCliente = new ListagemClientes(this.empresa.getClientes)
        listagemCliente.listar()

        let numCliente = this.entrada.receberNumero(`Por favor informe o número do cliente a ser associado: `)

        this.clientes[numCliente-1].pushProduto(this.produtos[num-1])

        console.log(`\n Associação concluída :)\n`);
    }

}