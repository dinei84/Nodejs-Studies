# Roteiro: curso de Node.js (Udemy)

> Trilha principal deste repositório. Lida no início de toda sessão de estudo.
> Atualize ao fim de cada sessão (ver "Diretrizes de memória" no CLAUDE.md).

## Objetivo
Dominar o back-end com Node.js até construir uma API REST completa (Get A Pet: Express,
MVC, MongoDB/Mongoose, autenticação), sabendo explicar cada peça, e levar isso ao
`familybudget` (frontend Next.js/React).

## Decisões já tomadas (não reabrir sem ele pedir)
- Seguir a ordem do curso; apêndices entram quando a seção pedir (ex.: MongoDB antes da
  seção 12) ou quando ele quiser. (22/10/2026)
- Uma pasta por seção, uma subpasta por aula com código (regras no README.md). (22/10/2026)

## Seções
"Udemy" = aulas marcadas como vistas no curso (print de 22/10/2026).
"Repo" = existe código da seção neste repositório.

| # | Seção | Udemy | Repo | Pasta |
|---|---|---|---|---|
| 1 | Introdução | 18/21 | sim | `1_INTRO` |
| 2 | Fundamentos de Node.js | 20/21 | sim | `2_FUNDAMENTOS` |
| 3 | Node Core Modules na prática | 23/24 | sim | `3_CORE_MODULES` |
| 4 | Fundamentos do npm | 14/14 | sim | `4_NPM_FUNDAMENTAL` |
| 5 | Projeto 1: Accounts | 12/12 | sim | `5_ACCONTS` |
| 6 | Introdução ao Express | 14/14 | sim | `6_EXPRESS` |
| 7 | Template Engine com Express (Handlebars) | 14/15 | sim | `7_TEMPLATES_ENGINE` |
| 8 | Integração de Node.js com MySQL | 15/20 | sim | `8_NODE_E_MYSQL` |
| 9 | Utilizando o Sequelize | 18/18 | parcial (aulas 1 a 4) | `9_SEQUELIZER` |
| 10 | Arquitetura MVC com Node.js | 17/17 | não | |
| 11 | Projeto 2: Toughts (Express, Sequelize e MVC) | 30/30 | não | |
| 12 | Node.js com MongoDB | 21/21 | não | |
| 13 | Adaptando Mongoose ao nosso projeto | 12/12 | não | |
| 14 | Introdução a APIs | 12/12 | não | |
| 15 | Projeto 3: Get A Pet (API RESTful, MVC, Mongoose, autenticação) | 78/78 | não | |
| 16 | Masterclasses sobre React | 2/2 | não | |
| 17 | Apêndice A: Avançando no npm | 22/22 | não | |
| 18 | Apêndice B: Introdução ao HTML | 14/14 | não | |
| 19 | Apêndice C: Introdução ao CSS | 25/25 | não | |
| 20 | Apêndice D: Projeto HTML e CSS (WhatsApp Web Clone) | ? | não | |
| 21 | Apêndice E: Criação de bancos em MySQL | 8/8 | não | |
| 22 | Apêndice F: Criação de tabelas em MySQL | 18/18 | não | |
| 23 | Apêndice G: CRUD com MySQL | 11/11 | não | |
| 24 | Apêndice H: Gerenciamento de bancos com MongoDB | 1/19 | não | |
| 25 | Apêndice I: Inserção de dados com MongoDB | 0/12 | não | |
| 26 | Apêndice J: Leitura de dados com MongoDB | 0/13 | não | |
| 27 | Apêndice K: Atualização de dados com MongoDB | 0/9 | não | |
| 28 | Apêndice L: Exclusão de dados com MongoDB | 0/5 | não | |
| 29 | Apêndice M: Aula sobre Fetch API | 0/1 | não | |

## Onde paramos
**Última sessão (22/10/2026):** framework de estudo adaptado do repositório Java para o Node.
O último código commitado é `9_SEQUELIZER/4_resgatando_dados` (novembro/2025).
**Atenção:** a Udemy marca as seções 9 a 23 como vistas, mas não há código delas aqui.
**Próximo passo:** confirmar com o Dinei se ele refaz codificando a partir da seção 9
(aula 5 do Sequelize) ou se o código das seções 10+ está em outro lugar. Depois, retomar
pelo formato "Aula do curso" da skill `estudo-guiado`.

## Pendências e assuntos guardados para depois
- Seções 1 a 9 não passaram pelo ciclo completo (desafio, quiz, `NOTAS.md`). Vale um
  quiz-diagnóstico curto de cada uma antes de seguir, para achar buracos sem refazer tudo.
- `3_CORE_MODULES/7_atualizando_arquivos copy` tem espaço e "copy" no nome: combinar
  renomear para `7_atualizando_arquivos`.
- Pastas de aula com `nodemon` em `dependencies` (deveria ser `devDependencies`): bom
  gancho para revisar a seção 4.

## Como rodar (o que o Git não traz)
- Cada aula: `cd <pasta>` → `npm install` → `npm start` (ou `node index.js`).
- Seções 8 e 9: MySQL rodando local; usuário/senha e nome do banco ficam no `index.js` ou em `db/conn.js`
  (a partir de agora, preferir `.env`, que não vai para o Git).
