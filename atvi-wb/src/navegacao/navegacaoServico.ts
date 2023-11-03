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
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import DeleteServico from "../negocio/deleteServico";
import UpdateServico from "../negocio/updateServico";
import AssociaServico from "../negocio/associaServico";

export default class NavegacaoServico {
    private empresa: Empresa
    private execucao: Boolean

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.execucao = true
    }

    public menu(): void {
        while (this.execucao) {
            console.log(`\nOpções para Serviços:`);
            console.log(`1 - Cadastro de Serviços`);
            console.log(`2 - Listagem de Serviços`)
            console.log(`3 - Deletar Serviço`)
            console.log(`4 - Atualizar Serviço`)
            console.log(`5 - Associar Serviço`)
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroServico(this.empresa.getServicos)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem = new ListagemServicos(this.empresa.getServicos)
                    listagem.listar()
                    break;

                case 3:
                    let d = new DeleteServico(this.empresa.getServicos, this.empresa)
                    d.deletar()
                    break;

                case 4:
                    let u = new UpdateServico(this.empresa)
                    u.update()
                    break;

                case 5:
                    let a = new AssociaServico(this.empresa)
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
