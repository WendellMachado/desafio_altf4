# desafio_altf4

Para rodar o projeto localmente é necessário ter o node instalado e seguir os seguintes passos:
  
  1. Clone o repositório.
  2. Abra o terminal na pasta raiz do repositório e rode o comando npm install ou yarn install para instalar as dependências do projeto.
  3. Faça uma cópia do arquivo env.example e o renomeie para .env
  4. No mesmo terminal rode o comando npm run dev
  
 Endpoints:
 
  GET localhost:3000/ é o ponto de entrada aplicação, indica se o servidor está rodando.
  
  GET localhost:3000/products lista os produtos.
  
  GET localhost:3000/products/id lista um produto pelo id.
  
  POST localhost:3000/products cria um produto novo no banco, recebe os seguintes parâmetros em json:
  
    {
        "name": "nome do produto" (string) 
        "descricao": "descrição do produto" (string)
    }
  
  PUT localhost:3000/products/id edita um produto já existente no banco, a partir do id e recebe os seguintes parâmetros em json:
  
    {
        "name": "nome do produto" (string) 
        "descricao": "descrição do produto" (string)
    }
    
  DELETE localhost:3000/products/id deleta um produto já existente no banco, a partir do id.
