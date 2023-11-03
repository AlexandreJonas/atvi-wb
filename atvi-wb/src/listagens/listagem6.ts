import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class Listagem6{
    private empresa:Empresa
    private produtos:Array<Produto>
    private servicos:Array<Servico>
    private clientes:Array<Cliente>
    private entrada: Entrada

    constructor(empresa:Empresa)
    {
        this.empresa = empresa
        this.produtos = empresa.getProdutos
        this.servicos = empresa.getServicos
        this.clientes = empresa.getClientes
        this.entrada = new Entrada()
    }

    public listar(): void{
        console.log('')
        console.log('Exibindo clientes que mais gastaram...')
        console.log('')
        let empr = this.empresa
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
            return b.getGasto() - a.getGasto()
         })
        let lim = this.produtos.length < 5 ? this.produtos.length : 5

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.clientes[i].nome)
            console.log('-------------')
        }
    }
}