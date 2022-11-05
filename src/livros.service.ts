import { Produto } from './livro.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 20.9),
    new Produto('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência Artificial', 45.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
