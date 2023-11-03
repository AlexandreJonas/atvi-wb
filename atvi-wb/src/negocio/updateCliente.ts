import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import ListagemClientes from "./listagemClientes";

export default class UpdateCliente {
    private empresa: Empresa
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }
    public update(): void {
        console.log(`\nInício da atualização do cliente`);

        let listagem = new ListagemClientes(this.empresa.getClientes)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do cliente a ser atualizado: `)

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let sexo = this.entrada.receberTexto(`Por favor informe o sexo do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, sexo, cpf);

        let rgs = this.clientes[num-1].getRgs
        rgs.forEach(rg => {
            cliente.pushRG(rg)
        })

        let tels = this.clientes[num-1].getTelefones
        tels.forEach(tel => {
            cliente.pushTelefone(tel)
        })
        
        this.clientes[num-1] = cliente
        console.log(`\Atualização concluída :)\n`);
    }
}