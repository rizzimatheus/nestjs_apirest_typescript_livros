import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './livro.model';
import { ProdutosService } from './produtos.service';

// recebe como parâmetro a url '/produtos'
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtosService.criar(produto);
    console.log(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    console.log(produto);
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }
}
