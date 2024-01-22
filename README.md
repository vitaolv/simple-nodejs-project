## Passo a Passo para Execução do Projeto

Este projeto é composto por uma aplicação frontend e uma aplicação backend, além de utilizar o Prisma como ORM para conexão com um banco de dados PostgreSQL. Siga os passos abaixo para configurar e executar o projeto localmente.

1. Navegue até o diretório `backend` com o comando `cd backend` e instale as dependências com o comando `npm install`. Em seguida, instale o Prisma com o comando `npm install @prisma/cli`.

2. Volte para o diretório raiz do projeto com o comando `cd ..` e navegue até o diretório `frontend` com o comando `cd frontend`. Instale as dependências com o comando `npm install`.

3. Agora, você precisará executar o cliente (frontend), o servidor (backend) e o Prisma. Abra três terminais separados para cada um deles:

   - No terminal para o backend, execute `node index.js` para iniciar o servidor.
   - No terminal para o frontend, execute `npm run dev` para iniciar o cliente.
   - No terminal para o Prisma, execute `npx prisma studio` para iniciar o Prisma Studio.

4. Após iniciar o cliente, copie o link fornecido no terminal e abra-o em seu navegador para explorar o site localmente.

## Apresentação brevemente

- Cadastrar o produto

  ![Cadastro GIF](./videos/Cadastro.gif)

Ao cadastrar um produto, é necessário acessar a página de cadastro, bastando clicar em "Cadastrar o produto" na barra de navegação.

- Deletar o produto

![Deletar GIF](./videos/Deletar.gif)

Para remover um produto da base de dados, existem duas maneiras de fazer isso: clicar em "Deletar" na página inicial ou clicar em "Ver descrição" para acessar a página de detalhes do produto, onde também há um botão para deletar.

- Atualizar o produto

![Atualizar GIF](./videos/Editar.gif)

Para modificar as informações de um produto, há duas maneiras de fazer isso: clicar em "Editar" na página inicial, que o direcionará à página de edição. Outra opção é clicar em "Ver descrição", onde você encontrará o botão para editar.

<div>
<h2>
Tecnologias utilizadas:
</h2>

<ul>
<li>
Vite
</li>
<li>
React
</li>
<li>
TypeScript
</li>
<li>
NodeJS
</li>
<li>
ExpressJS
</li>
<li>
Sass
</li>
<li>
Prisma ORM
</li>
<li>
PostgreSQL
</li>
<li>
React Router Dom
</li>
<li>
Redux
</li>
</ul>

### E ainda não paramos por aqui, pois aprendizado, novas experiências e evolução são contínuos.

<p>
Este projeto foi desenvolvido com o objetivo, independente das tecnologias utilizadas, de criar um CRUD desafiador com funcionalidade de busca, proporcionando ao usuário a facilidade de encontrar os produtos listados.

Um detalhe curioso: este foi o meu primeiro desafio de CRUD e também o primeiro projeto a envolver o Node.js. O aprendizado foi rápido, com acertos e erros, sem medo de enfrentar os desafios! É muito gratificante adquirir experiências durante este projeto.

Vale ressaltar também que não utilizei Bootstrap, Material UI, Ant Design e afins. Todos os componentes foram desenvolvidos em TS-react Sass. Apesar da desvantagem em termos de tempo de desenvolvimento, essa abordagem proporcionou maior liberdade no design, menos dependências e personalização dos componentes, alinhando-se melhor às necessidades específicas do projeto.

## Próximas Etapas

Este projeto está em constante evolução. Aqui estão algumas das melhorias planejadas para o futuro:

- **Hospedagem**: Embora o GitHub Pages seja uma excelente opção para hospedar sites estáticos, ele não suporta aplicações full-stack como este projeto aqui. O GitHub Pages não tem a capacidade de executar um servidor backend, que é necessário para a funcionalidade de CRUD, prisma, PostgreSQL, banco de dados e afins deste aplicativo.

  Por isso, estou explorando outras opções de hospedagem para este projeto e estou aberto a sugestões e experiências. Se você tiver uma plataforma de hospedagem que recomenda ou tem experiência em hospedar aplicações full-stack, por favor, sinta-se à vontade para compartilhar suas ideias e experiências.

  Atualmente, estou explorando opções para hospedar este aplicativo para que ele possa ser acessado publicamente. Estou particularmente interessado em usar o Heroku e o MongoDB para isso.

- **Autenticação**: Planejo adicionar uma funcionalidade que permita aos usuários fazer login com suas contas do GitHub e/ou Google. Isso permitirá que os usuários gerenciem seus próprios arquivos individualmente.

- **Testes**: Para garantir a qualidade do código e a funcionalidade do aplicativo, planejo desenvolver testes unitários e de integração.

Fique atento para atualizações futuras!

🚀🚀🚀

</p>

</div>
