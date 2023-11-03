import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class Listagem4{
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
        console.log('Exibindo produtos mais consumidos por genero M...')
        console.log('')
        let empr = this.empresa
        this.produtos.sort(function(a:Produto,b:Produto):number{
           return b.getVezesPorGenero(empr,'M') - a.getVezesPorGenero(empr,'M')
        })
        let lim = this.produtos.length < 10 ? this.produtos.length : 10

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.produtos[i].nome)
            console.log('-------------')
        }

        console.log('Exibindo produtos mais consumidos por genero F...')
        this.produtos.sort(function(a:Produto,b:Produto):number{
            return b.getVezesPorGenero(empr,'F') - a.getVezesPorGenero(empr,'F')
         })
 
         for (let i = 0; i< lim; i++)
         {
             console.log((i+1) + ' - ' + this.produtos[i].nome)
             console.log('-------------')
         }

        console.log('')
        console.log('Exibindo serviços mais consumidos do genero M...')
        console.log('')
        
        this.servicos.sort(function(a:Servico,b:Servico):number{
           return b.getVezesConsumido(empr) - a.getVezesConsumido(empr)
        })
        lim = this.servicos.length < 10 ? this.servicos.length : 10

        for (let i = 0; i< lim; i++)
        {
            console.log((i+1) + ' - ' + this.servicos[i].nome)
            console.log('-------------')
        }
        
        
    }
}