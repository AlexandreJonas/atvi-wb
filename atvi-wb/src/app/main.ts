/*
-Listagem de clientes -> Mostrar data de emissão de cpf
-Atualizar cadastro de cliente pra incluir data de cadastro e telefones
-Update de Cliente
-Crud de produto e serviço                  DONE
-Associar produto e serviço a cliente
-Mock de Produto e Serviço

npm install -g typescript
npm install prompt-sync
tsc --build
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser 
node .\out\app\main.js
*/
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import NavegacaoCliente from "../navegacao/navegacaoCliente";
import NavegacaoProduto from "../navegacao/navegacaoProduto";
import NavegacaoServico from "../navegacao/navegacaoServico";

import Mocking from "../negocio/mocking";


//Mudar essa bagaça
console.log(`\nBem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`)
    console.log(`1 - Página de Clientes`)
    console.log(`2 - Página de Produtos`)
    console.log(`3 - Página de Serviços`)
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
        /*
        case 4: 
            let listagemp = new ListagemProdutos(empresa.getProdutos)
            listagemp.listar()
            break;
       
        case 5:
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