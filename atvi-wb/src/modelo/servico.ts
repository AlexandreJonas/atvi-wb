import Empresa from "./empresa"

export default class Servico {
    public nome!: string
    public preco!: number
    constructor(nome: string, preco:number)
    {
        this.nome = nome
        this.preco = preco
    }

    public getNome(): string{
        return this.nome
    }

    public getPreco(): number{
        return this.preco
    }

    public getVezesConsumido(empresa:Empresa): number{
        let cont = 0
        empresa.getClientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(ser => {
                if (ser.nome === this.nome)
                {
                    cont++;
                }
            })
        })
        return cont;
    }
}