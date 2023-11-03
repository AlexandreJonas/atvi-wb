import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let sexo = this.entrada.receberTexto(`Por favor informe o sexo do cliente: `)
        //Cadastro CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);

        //Cadastro RG
        valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor,dataEmissao);

        //Cadastro Telefone
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do seu telefone: `);
        let num = this.entrada.receberTexto(`Por favor informe o número do seu teelfone: `);
        let tel = new Telefone(ddd,num)
        

        let cliente = new Cliente(nome, nomeSocial,sexo, cpf);
        cliente.setDataCadastro();
        cliente.pushRG(rg);
        cliente.pushTelefone(tel)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}