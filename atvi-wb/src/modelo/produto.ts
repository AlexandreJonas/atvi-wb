import Empresa from "./empresa"

export default class Produto {
    public nome!: string
    public preco!: number
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }

    public getNome(): string {
        return this.nome
    }

    public getPreco(): number {
        return this.preco
    }

    public getVezesConsumido(empresa: Empresa): number {
        let cont = 0
        empresa.getClientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(prd => {
                if (prd.nome === this.nome) {
                    cont++;
                }
            })
        })
        return cont;
    }

    public getVezesPorGenero(empresa: Empresa, sexo: string): number {
        let cont = 0
        empresa.getClientes.forEach(cliente => {
            if (cliente.getSexo === sexo) {
                cliente.getProdutosConsumidos.forEach(prd => {
                    if (prd.nome === this.nome) {
                        cont++;
                    }
                })
            }
        })
        return cont;
    }
}