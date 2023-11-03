import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";

export default class Listagem5{
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

    public listar(): void{
        console.log('Exibindo clientes que menos consumiram produtos...')
        console.log('')
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
           return a.getProdutosConsumidos.length - b.getProdutosConsumidos.length
        })
        let lim = this.clientes.length < 10 ? this.clientes.length : 10

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.clientes[i].nome)
            console.log('-------------')
        }

        console.log('Exibindo clientes que menos consumiram serviços...')
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
           return a.getServicosConsumidos.length - b.getServicosConsumidos.length
        })

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.clientes[i].nome)
            console.log('-------------')
        }
        
        
    }
}