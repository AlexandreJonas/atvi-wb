import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";

export default class Listagem2{
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
        console.log('Exibindo clientes por genêro...')
        console.log('')
        this.clientes.sort(function(a:Cliente,b:Cliente):number{
            if (b.getSexo < a.getSexo)
            {
                return -1
            }
            if (b.getSexo > a.getSexo)
            {
                return 1
            }
            return 0   
        })

        let lim = this.clientes.length < 10 ? this.clientes.length : 10
        let auxSexo = ''

        for (let i = 0; i< lim; i++)
        {
            if (auxSexo != this.clientes[i].getSexo)
            {
                auxSexo = this.clientes[i].getSexo
                console.log('Gênero: ' + auxSexo)
            } 
            console.log((i+1) + ' - ' + this.clientes[i].nome + ': ' + this.clientes[i].getSexo)
            console.log('-------------')
        }
        
    }
}