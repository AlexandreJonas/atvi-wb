import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";

export default class Mocking {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public mock(): void {
        //CLiente 1
        let dataEmissao = new Date(2000, 1, 1)
        let cpf = new CPF('333', dataEmissao);
        dataEmissao = new Date(2023, 2, 2)
        let rg = new RG('222', dataEmissao);
        let cliente = new Cliente('Alexandre', 'Alexandre','M', cpf);
        cliente.setDataCadastro()
        cliente.pushRG(rg)
        this.clientes.push(cliente)

         //Cliente 3
         dataEmissao = new Date(2023, 5, 5)
         cpf = new CPF('666', dataEmissao);
         dataEmissao = new Date(2023, 6, 6)
         rg = new RG('777', dataEmissao);
         cliente = new Cliente('Adriene', 'Adriene', 'F',cpf);
         cliente.setDataCadastro()
         cliente.pushRG(rg)
         this.clientes.push(cliente)
        
        //Cliente 2
        dataEmissao = new Date(2023, 3, 3)
        cpf = new CPF('444', dataEmissao);
        dataEmissao = new Date(2023, 4, 4)
        rg = new RG('555', dataEmissao);
        cliente = new Cliente('Samuel', 'Samuel', 'M',cpf);
        cliente.setDataCadastro()
        cliente.pushRG(rg)
        this.clientes.push(cliente)

       
    }
}