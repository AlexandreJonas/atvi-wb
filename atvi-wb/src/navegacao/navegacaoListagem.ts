import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import Listagem1 from "../listagens/listagem1";
import Listagem2 from "../listagens/listagem2";
import Listagem3 from "../listagens/listagem3";
import Listagem4 from "../listagens/listagem4";
import Listagem5 from "../listagens/listagem5";
import Listagem6 from "../listagens/listagem6";

export default class NavegacaoListagem {
    private empresa: Empresa
    private execucao: Boolean

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.execucao = true
    }

    public menu(): void {
        while (this.execucao) {
            console.log(`\nOpções de visualização de dados gerais:`);
            console.log(`1 - 10 Clientes que mais consumiram Produtos ou Serviços`);
            console.log(`2 - Todos os clientes por gênero`)
            console.log(`3 - Serviços ou Produtos mais consumidos`);
            console.log(`4 - Serviços ou Produtos mais consumidos por gênero`);
            console.log(`5 - 10 clientes que menos consumiram Produtos ou Serviços`);
            console.log(`6 - 5 clientes que mais gastaram com Produtos ou Serviços `);
            console.log(`0 - Voltar`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let l1 = new Listagem1(this.empresa)
                    l1.listar()
                    break;
                case 2:
                    let l2 = new Listagem2(this.empresa)
                    l2.listar()
                    break;

                case 3:
                    let l3 = new Listagem3(this.empresa)
                    l3.listar()
                    break;

                case 4:
                    let l4 = new Listagem4(this.empresa)
                    l4.listar()
                    break;

                case 5:
                    let l5 = new Listagem5(this.empresa)
                    l5.listar()
                    break;

                case 6:
                    let l6 = new Listagem6(this.empresa)
                    l6.listar()
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
