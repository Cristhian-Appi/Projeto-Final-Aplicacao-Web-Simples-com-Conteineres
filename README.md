# Documentação do Projeto Final: Aplicação Web Simples com Contêiners

O projeto é composto por três componentes:

Front-end em NEXT;

API em JavaScript;

Banco de dados MongoDB.

Componentes do Projeto:

**Frontend**
Tecnologia: NEXT.js
Descrição: Interface de usuário construída com NEXT.js, servida por um servidor web em um contêiner.
Portas: Exposta ao hospedeiro.

**Backend**
Tecnologia: Node.js (JavaScript)
Descrição: API REST desenvolvida em JavaScript, em um contêiner separado.

**Banco de Dados**
Tecnologia: MongoDB
Descrição: Contêiner com um banco de dados MongoDB para armazenar os dados da aplicação.
Rede

Descrição: Todos os contêineres devem estar na mesma rede, permitindo a comunicação entre eles. Apenas o contêiner do frontend deve ter portas expostas ao hospedeiro.

# COMANDOS

### Limpeza de Contêineres Anteriores

Antes de iniciar a configuração e o deployment, é recomendável limpar qualquer contêiner, volume ou imagem Docker existente relacionado ao projeto. Para isso, execute os seguintes comandos no terminal Linux:

```bash
docker compose down --volumes --rmi all
```

### Build e Execução dos Contêineres

Para construir e executar os contêineres, execute os seguintes comandos no terminal:

```bash
docker compose up -d
```

### Acesso à Aplicação Web

Após a execução bem-sucedida dos contêineres, a aplicação web estará acessível no seguinte URL:

```powershell
http://localhost:8000
```
