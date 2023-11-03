import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        let n :number = 1
        this.clientes.forEach(cliente => {
            console.log(`CLIENTE NÚMERO ` + n)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Sexo: ` + cliente.getSexo);
            console.log(`Data Cadastro: ` + cliente.getDataCadastro);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Emissão do CPF: ` + cliente.getCpf.getDataEmissao);
            cliente.getRgs.forEach( rg => {
                console.log(`RG: ` + rg.getValor);
                console.log(`Emissão do RG: ` + rg.getDataEmissao);
            });
            console.log('Telefones:')
            cliente.getTelefones.forEach( tel => {
                console.log(`DDD: ` + tel.getDdd);
                console.log(`Número: ` + tel.getNumero);
            });
            console.log(`--------------------------------------`);
            console.log('Produtos:')
            cliente.getProdutosConsumidos.forEach( prd => {
                console.log(`Nome: ` + prd.nome);
                console.log(`Preço: ` + prd.preco);
            });
            console.log(`--------------------------------------`);
            console.log(`--------------------------------------`);
            console.log('Serviços:')
            cliente.getServicosConsumidos.forEach( ser => {
                console.log(`Nome: ` + ser.nome);
                console.log(`Preço: ` + ser.preco);
            });
            console.log(`--------------------------------------`);
            n++
        });
        console.log(`\n`);
    }
}