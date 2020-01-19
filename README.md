# Passo a passo

1. Clone o repositório
2. Abra o terminal na raíz do projeto
3. Digite o comando 'yarn install' para baixar as dependências
4. Acesse src/config/database.js e coloque o nome do usuário e senha do seu banco de dados Mysql,
   mudar o nome da database não é necessário.
5. Execute esses comandos no terminal na raíz do projeto respectivamente
   yarn sequelize db:create
   yarn sequelize db:migrate
6. Logo após execute o comando para iniciar o servidor
   yarn dev
7. Caso ocorra o erro que a porta do servidor já está em uso acesse index.js na raíz do projeto
   e mude app.listen(8888) para outra porta.
8. Caso você mude a porta do servidor e pretende usar o Insomnia, não esqueça
   de mudar a porta no ambiente dentro do Insomnia também.
