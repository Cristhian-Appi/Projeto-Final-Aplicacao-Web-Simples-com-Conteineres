# Use a imagem oficial do MongoDB como base
FROM mongo:4.4

# Copie o script de inicialização para o diretório de inicialização do MongoDB
COPY init.js /docker-entrypoint-initdb.d/

# Exponha a porta padrão do MongoDB
EXPOSE 27017
