# Используем официальный образ Node.js
FROM node:18.15.0

# Создаем рабочую директорию внутри контейнера
WORKDIR /AppforDocker

# Копируем файлы приложения в контейнер
COPY package*.json ./
COPY index.js .

# Устанавливаем зависимости
RUN npm install

# Команда для запуска вашего приложения (в данном случае, index.js)
CMD ["node", "index.js"]

