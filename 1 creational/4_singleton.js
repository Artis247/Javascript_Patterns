class Database {
  constructor(data) {
    if (Database.exists) {  // объект класса  Database 
      return Database.instance // уже был проинициилизировван
    }
    Database.instance = this  // создание инстанса
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())     //"MongoDB"

const mysql = new Database('MySQL')
console.log(mysql.getData())     // "MongoDB"


