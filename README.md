# Estudos de Node.js do Dinei: mapa do repositório

As pastas seguem a ordem das seções do curso de Node.js da Udemy (ver
[ROTEIRO.md](ROTEIRO.md)). **Agentes:** use a tabela "Onde colocar" para decidir a pasta
de qualquer estudo novo, e a memória em [CLAUDE.md](CLAUDE.md).

| Pasta | Seção do curso | O que tem |
|---|---|---|
| `1_INTRO/` | 1 | Primeiro programa, uso de módulos, desafio |
| `2_FUNDAMENTOS/` | 2 | Módulos (import/export), argumentos, console, chalk, leitura de input, event loop, EventEmitter, sync x async |
| `3_CORE_MODULES/` | 3 | `http`, `url`, `fs`, `path`, `os`, roteamento na mão |
| `4_NPM_FUNDAMENTAL/` | 4 | `npm init`, pacotes, dependência de dev, scripts, pacote global |
| `5_ACCONTS/` | 5 | Projeto 1: Accounts (CLI de contas com arquivos) |
| `6_EXPRESS/` | 6 | Express: setup, nodemon, middleware, parâmetros, POST, rotas, CSS, 404 |
| `7_TEMPLATES_ENGINE/` | 7 | Handlebars: layouts, dados, condicionais, repetição, `with`, partials, CSS |
| `8_NODE_E_MYSQL/` | 8 | Express + MySQL (`mysql2`): CRUD, connection pool, query preparada |
| `9_SEQUELIZER/` | 9 | Sequelize: models, inserir e buscar dados |
| `00_esperimentos/` | fora do curso | Experimentos livres |

## Onde colocar (regras para agentes)

1. **Uma pasta por seção do curso** na raiz: `<numero>_<TEMA>` em MAIÚSCULAS, como as
   existentes. Próximas: `10_MVC/`, `11_TOUGHTS/`, `12_MONGODB/`, `13_MONGOOSE/`,
   `14_APIS/`, `15_GET_A_PET/`... Apêndices: `A_NPM_AVANCADO/`, `H_MONGODB/`...
2. **Uma subpasta por aula** que tenha código: `<numero>_<nome_da_aula>` em `snake_case`,
   minúsculas, **sem espaços nem acentos** (ex.: `9_SEQUELIZER/5_removendo_dados/`).
3. **Cada aula é um projeto npm independente**, com `package.json` próprio na raiz da
   subpasta (é assim que o curso faz). Ponto de entrada: `index.js`.
4. **Projeto do curso** (Accounts, Toughts, Get A Pet) fica direto na pasta da seção, e,
   se tiver muitas aulas, recebe um `CLAUDE.md` criado de
   `.claude/skills/estudo-guiado/TRILHA-MODELO.md`.
5. **Desafio autoral** (o exercício que o professor propõe no fim da seção, diferente do
   código da aula) fica em `<SECAO>/desafio/` com um `README.md` de enunciado.
   `NOTAS.md` dele fica na raiz da pasta da seção.
6. **Não renomeie pastas antigas** sem combinar: o histórico do Git fica mais difícil de ler.
7. Nunca commitar `node_modules/` nem `.env` (senha do MySQL, string do MongoDB, segredo
   do JWT). Use `.env.example` com valores falsos (ver `.gitignore`).

## Exercícios extras de sintaxe JS

Quando o Dinei pedir um exercício para manter a sintaxe afiada:
- Crie em `exercicios/` com numeração contínua: `exercicio_01_<tema_curto>/`.
- `README.md` com **enunciado, exemplo de entrada/saída e critérios de aceite**, e
  `index.js` só com o esqueleto. **A solução é dele.**
- Calibre pelo perfil do aluno no `CLAUDE.md` (escopo, async/await, condições compostas,
  métodos de array como `map`/`filter`/`reduce`).
- Depois que ele resolver, revise com a rubrica da skill `estudo-guiado` (Fase 7).
