# Projeto A3 - Cardápio Digital

## Integrantes

- Caio André Porto de Oliveira (RA: `822156202`)
- Eduardo Gonzales Cortizo Peres (RA: `823215420`)
- Kluivert Kevin Huaman Alvarado (RA: `823163501`)
- Rômulo dos Santos Mendes (RA: `822161394`)
- Ronildo Santos da Silva (RA: `821230934`)

# Inicialize a aplicação

### `Clone o repositório:`

```powershell
git clone https://github.com/projeto-a3-usjt/dev-a3.git
```

### `Execute o Front-end:`

#### _Abra o terminal_

```powershell
cd front-end
```

```powershell
cd cliente
```

```powershell
npm install
```

```powershell
PORT=3002 npm start --watch
```

O comando acima executa a aplicação na porta 3002 e isso é necessario para não conflitar com a aplicação `Garcom` que é executada na porta 3000 por padrão

### `Execute o Back-end:`

#### _Abra um segundo terminal sem fechar o primeiro terminal_

```powershell
cd back-end
```

```powershell
npm install
```

```powershell
npm i -g @nestjs/cli
```

### _Crie um arquivo chamado .env na pasta back-end, copie as configurações abaixo e cole no arquivo .env, seguindo as instruções entre parênteses e os parâmetros existentes:_

```
DB_TYPE=mysql
DB_HOST=(nome-do-host)
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=(senha-do-usuário)
DB_DATABASE=(nome-do-banco-de-dados)
DB_ENTITIES=dist/**/*.entity{.ts,.js}
DB_SYNCHRONIZE=true
```

### _Volte para o segundo terminal novamente_

```powershell
npm start
```

# Software para gerenciamento de tarefas

### Trello
