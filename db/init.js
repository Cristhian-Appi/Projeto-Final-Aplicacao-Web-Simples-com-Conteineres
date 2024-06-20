db = db.getSiblingDB('mydatabase');

db.createCollection('logs');

db.logs.insertMany([
  { message: 'Log message 1', timestamp: new Date() },
  { message: 'Log message 2', timestamp: new Date() },
  { message: 'Log message 3', timestamp: new Date() }
]);
