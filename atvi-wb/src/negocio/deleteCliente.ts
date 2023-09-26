import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import ListagemClientes from "./listagemClientes";
import Empresa from "../modelo/empresa"

export default class DeleteCliente {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, empresa: Empresa) {
        this.empresa = empresa
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do cliente`);

        let listagem = new ListagemClientes(this.empresa.getClientes)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do cliente a ser excluído: `)
        this.clientes.splice(num - 1,1)
        console.log(`\nExclusão concluída :)\n`);
    }
}