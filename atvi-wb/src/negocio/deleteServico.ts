import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import ListagemServicos from "./listagemServicos";
import Empresa from "../modelo/empresa"

export default class DeleteServico {
    private empresa: Empresa
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>, empresa: Empresa) {
        this.empresa = empresa
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do serviço`);

        let listagem = new ListagemServicos(this.empresa.getServicos)
        listagem.listar()

        let num = this.entrada.receberNumero(`Por favor informe o número do servico a ser excluído: `)
        this.servicos.splice(num - 1,1)
        console.log(`\nExclusão concluída :)\n`);
    }
}