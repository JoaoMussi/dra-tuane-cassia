## Executando o projeto localmente

Instale todas as dependências

```bash
npm run dev
```

Então suba o projeto em sua máquina

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser e comece as alterações.

## Configurando o husky

A execução dos comandos no Husky poderão apresentar erros ao executar dependências.

Caso isso ocorra, crie o arquivo `.huskyrc` no diretório `~/` com o seguinte conteúdo:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Embla Carousel

Para agilizar o desenvolvimento, utilizei uma library pública que estrutura o componente de carrossel com os requisitos que eu precisei para o site.

npm: https://www.npmjs.com/package/embla-carousel
Documentação: https://www.embla-carousel.com/