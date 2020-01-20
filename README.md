# Passo a passo

1. Clone o repositório
2. Abra o terminal na raíz do projeto
3. Digite o comando 'yarn install' para baixar as dependências
4. Acesse src/config/database.js e coloque o nome do usuário e senha do seu banco de dados Mysql,
   mudar o nome da database não é necessário.
5. Execute esses comandos no terminal na raíz do projeto respectivamente
5.1 yarn sequelize db:create
5.2 yarn sequelize db:migrate
6. Logo após execute o comando para iniciar o servidor
6.1 yarn dev
7. Se você não possue o yarn, é possível utilizar o npm
8. Para instalar o yarn acesse: https://yarnpkg.com/lang/en/
9. Caso ocorra o erro que a porta do servidor já está em uso acesse index.js na raíz do projeto
   e mude app.listen(8888) para outra porta.
10. Caso você mude a porta do servidor e pretende usar o Insomnia, não esqueça
   de mudar a porta no ambiente dentro do Insomnia também.
11. O json do workspace do Insomnia encontra-se dentro de src/utils
12. Não é necessário usar em nenhum momento SQL no banco
