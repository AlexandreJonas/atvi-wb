import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class Mocking {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public mock(): void {
        let dataEmissao = new Date(2000, 1, 1)
        let cpf = new CPF('333', dataEmissao);
        let cliente = new Cliente('Alexandre', 'Alexandre', cpf);
        this.clientes.push(cliente)
        
        dataEmissao = new Date(2023, 2, 2)
        cpf = new CPF('444', dataEmissao);
        cliente = new Cliente('Samuel', 'Samuel', cpf);
        this.clientes.push(cliente)
    }
}