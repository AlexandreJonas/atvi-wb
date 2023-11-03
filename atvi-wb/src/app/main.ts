/*
-Listagem de clientes -> Mostrar data de emissão de cpf     DONE
-Atualizar cadastro de cliente pra incluir data de cadastro DONE
-Atualizar cadastro de cliente pra incluir telefones        DONE
-Atualizar cadastro de cliente pra incluir RGs              DONE
-Update de Cliente                              DONE
-Crud de produto e serviço                      DONE
-Associar produto e serviço a cliente           DONE
-Incluir campo de sexo para cliente             DONE
-Incluir campo de preço para produto e serviço  DONE
-Mock de Produto e Serviço

Listagens: 
1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.  DONE
2. Listagem de todos os clientes por gênero.       DONE
3. Listagem geral dos serviços ou produtos mais consumidos. DONE
4. Listagem dos serviços ou produtos mais consumidos por gênero.
5. Listagem dos 10 clientes que menos consumiram produtos ou serviços.  DONE
6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade. DONE

npm install -g typescript
npm install prompt-sync
tsc --build
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
node .\out\app\main.js
*/
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

import NavegacaoCliente from "../navegacao/navegacaoCliente";
import NavegacaoProduto from "../navegacao/navegacaoProduto";
import NavegacaoServico from "../navegacao/navegacaoServico";
import NavegacaoListagem from "../navegacao/navegacaoListagem";
import Mocking from "../negocio/mocking";


//Mudar essa bagaça
console.log(`\nBem-vindo ao serviços de cadastros do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`)
    console.log(`1 - Página de Clientes`)
    console.log(`2 - Página de Produtos`)
    console.log(`3 - Página de Serviços`)
    console.log(`4 - Listar Dados Gerais`)
    console.log(`99 - Inserir dados de teste`)
    console.log(`0 - Sair`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let nc = new NavegacaoCliente(empresa)
            nc.menu()
            break;
        case 2:
            let np = new NavegacaoProduto(empresa)
            np.menu()
            break;

        case 3:
            let ns = new NavegacaoServico(empresa)
            ns.menu()
            break;
        
        case 4: 
            let nl = new NavegacaoListagem(empresa)
            nl.menu()
            break;
       
        /*case 5:
            let cadastroS = new CadastroServico(empresa.getServicos)
             cadastroS.cadastrar()
            break;
    
        case 6: 
            let listagemS = new ListagemServicos(empresa.getServicos)
            listagemS.listar()
            break;
        */
        case 99:
            let mock = new Mocking(empresa.getClientes)
            mock.mock()
            console.log(`Dados mockados :)`)
            console.log(`\n`);
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}