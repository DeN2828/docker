const { MongoClient } = require('mongodb');

// URL для подключения к MongoDB (замените на ваше значение)
const url = 'mongosh "mongodb+srv://cluster0.pq8xrgm.mongodb.net/" --apiVersion 1 --username dentu';

// Имя базы данных
const dbName = 'test';

// Имя коллекции
const collectionName = 'users';

// Подключение к MongoDB
MongoClient.connect(url, { useNewUrlParser: true }, async (err, client) => {
  if (err) {
    console.error('Ошибка подключения к MongoDB:', err);
    return;
  }

  console.log('Успешное подключение к MongoDB');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  try {
    // Получаем список данных из коллекции
    const documents = await collection.find({}).toArray();

    // Выводим список данных в консоль
    console.log('Список данных:');
    documents.forEach((doc, index) => {
      console.log(`Документ #${index + 1}:`, doc);
    });
  } catch (err) {
    console.error('Ошибка при получении данных:', err);
  } finally {
    // Закрываем соединение с MongoDB
    client.close();
  }
});
