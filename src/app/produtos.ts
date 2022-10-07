export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
    quantidadeEstoque: number;
}

export interface IprodutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Leite em pó com uva", preco: 200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/ninho_uva.jpeg", quantidadeEstoque: 15 },
    { id: 2, descricao: "Brigadeiro Belga de Café", preco: 190.00, descricaoPreco: "À vista no PIX", imagem: "./assets/cafe.jpeg", quantidadeEstoque: 10 },
    { id: 3, descricao: "Camafeu", preco: 300.00, descricaoPreco: "À vista no PIX", imagem: "./assets/camafeu.jpeg", quantidadeEstoque: 10 },
    { id: 4, descricao: "Carolinas com Chocolate Belga", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/carolinas.jpeg", quantidadeEstoque: 10 },
    { id: 5, descricao: "Bolo no Pote", preco: 15.00, descricaoPreco: "À vista no PIX", imagem: "./assets/bolo_no_pote.jpeg", quantidadeEstoque: 10 },
    { id: 6, descricao: "Bolo de Morango", preco: 105.00, descricaoPreco: "À vista no PIX", imagem: "./assets/bolo_morango.jpeg", quantidadeEstoque: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10 }
]