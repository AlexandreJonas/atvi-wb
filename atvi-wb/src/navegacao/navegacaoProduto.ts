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
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import DeleteProduto from "../negocio/deleteProduto";
import UpdateProduto from "../negocio/updateProduto";
import AssociaProduto from "../negocio/associaProduto";

export default class NavegacaoProduto {
    private empresa: Empresa
    private execucao: Boolean

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.execucao = true
    }

    public menu(): void {
        while (this.execucao) {
            console.log(`\nOpções para Produtos:`);
            console.log(`1 - Cadastro de Produtos`);
            console.log(`2 - Listagem de Produtos`)
            console.log(`3 - Deletar Produto`)
            console.log(`4 - Atualizar Produto`)
            console.log(`5 - Associar Produto`)
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroProduto(this.empresa.getProdutos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemProdutos(this.empresa.getProdutos)
                    listagem.listar()
                    break;

                case 3:
                    let d = new DeleteProduto(this.empresa.getProdutos, this.empresa)
                    d.deletar()
                    break;

                case 4:
                    let u = new UpdateProduto(this.empresa)
                    u.update()
                    break;

                case 5:
                    let a = new AssociaProduto(this.empresa)
                    a.associar()
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
