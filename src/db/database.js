import dotenv from 'dotenv';
import mysql from 'mysql';
dotenv.config();

export const database = {
  connection() {
    let conn = null;
    try {
      console.log(process.env.DBHOST)
      console.log(process.env.DBUSER)
      console.log(process.env.DBPASS)
      console.log(process.env.DBNAME)
      console.log(process.env.DBPORT)
      conn = mysql.createConnection({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASS,
            database: process.env.DBNAME,
            port: process.env.DBPORT
        });
    } catch (error) {
        console.log("Error al conectar con la base de datos");
    }

    return conn;
  }
};



