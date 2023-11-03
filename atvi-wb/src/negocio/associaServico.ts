import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Servico from "../modelo/servico";
import ListagemClientes from "./listagemClientes";
import ListagemServicos from "./listagemServicos";

export default class AssociaServico {
    private empresa:Empresa
    private servicos:Array<Servico>
    private clientes:Array<Cliente>
    private entrada: Entrada

    constructor(empresa:Empresa)
    {
        this.empresa = empresa
        this.servicos = empresa.getServicos
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }

    public associar(): void 
    {
        console.log(`\nInício da associação do serviço`)

        let listagem = new ListagemServicos(this.servicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do serviço a ser associado: `)

        let listagemCliente = new ListagemClientes(this.empresa.getClientes)
        listagemCliente.listar()

        let numCliente = this.entrada.receberNumero(`Por favor informe o número do cliente a ser associado: `)

        this.clientes[numCliente-1].pushServico(this.servicos[num-1])

        console.log(`\n Associação concluída :)\n`);
    }

}