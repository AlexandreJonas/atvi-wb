/*
-Listagem de clientes -> Mostrar data de emissão de cpf
-Atualizar cadastro de cliente pra incluir data de cadastro e telefones
-Update de Cliente
-Delete de Cliente
-Crud de produto e serviço
-Associar produto e serviço a cliente
*ao cadastrar produto e serviço deve dar push na array do atributo da empresa


npm install -g typescript
npm install prompt-sync
tsc --build
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
node .\out\app\main.js
*/
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import DeleteCliente from "../negocio/deleteCliente";

export default class NavegacaoCliente {
    private empresa: Empresa
    private execucao: Boolean

    constructor( empresa: Empresa)
    {
        this.empresa = empresa
        this.execucao = true
    }

    public menu() : void
    {
        while (this.execucao) {
            console.log(`\nOpções para Cliente:`);
            console.log(`1 - Cadastro de Clientes`);
            console.log(`2 - Listagem de Clientes`)
            console.log(`3 - Deletar Cliente`)
            console.log(`0 - Voltar`);
        
            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
        
            switch (opcao) {
                case 1:
                    let cadastro = new CadastroCliente(this.empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemClientes(this.empresa.getClientes)
                    listagem.listar()
                    break;

                case 3:
                    let d = new DeleteCliente(this.empresa.getClientes,this.empresa)
                    d.deletar()
                     break;
        
                case 0:
                    this.execucao = false
                    console.log(`Retornando...`)
                    console.log(`\n`);
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
        }
    }
}
