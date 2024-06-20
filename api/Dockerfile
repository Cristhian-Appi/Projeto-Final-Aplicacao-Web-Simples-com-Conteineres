# Use a imagem base oficial do Node.js na versão 20.13.1
FROM node:20.13.1

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que a API será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/index.mjs"]
