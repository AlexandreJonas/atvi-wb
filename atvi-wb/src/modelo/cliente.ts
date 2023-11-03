import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private sexo: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, sexo:string,cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.sexo = sexo
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getSexo():string{
        return this.sexo
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public setDataCadastro():void
    {
        this.dataCadastro = new Date();
    }

    public pushRG(RG:RG):void{
        this.rgs.push(RG);
    }

    public pushTelefone(tel:Telefone):void{
        this.telefones.push(tel);
    }

    public pushProduto(prd:Produto):void{
        this.produtosConsumidos.push(prd);
    }

    public pushServico(ser:Servico):void{
        this.servicosConsumidos.push(ser);
    }

    public getGasto(): number{
        let cont = 0
        this.getProdutosConsumidos.forEach(prd => {
            cont += prd.preco;
        })
        this.getServicosConsumidos.forEach(ser => {
            cont += ser.preco;
        })
        return cont;
    }
}