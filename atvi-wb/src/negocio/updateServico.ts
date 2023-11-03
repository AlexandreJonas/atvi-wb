import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import ListagemServicos from "./listagemServicos";
import Empresa from "../modelo/empresa"
import Servico from "../modelo/servico";

export default class UpdateServico {
    private empresa: Empresa
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.servicos = empresa.getServicos
        this.entrada = new Entrada()
    }

    public update(): void {
        console.log(`\nInício da atualização do serviço`);

        let listagem = new ListagemServicos(this.empresa.getServicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do serviço a ser atualizado: `)
        let nome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `)
        this.servicos[num-1] = new Servico(nome,preco)
        console.log(`\n Atualização concluída :)\n`);
    }
}