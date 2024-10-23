import {database} from "../db/database.js";

export const userController = {
  async login(req, res) {
    const correo = req.body.correo;
    const password = req.body.password;

    let databd = null;
    const conn = await database.connection();
    await conn.query("SELECT * FROM usuarios",
      (error, results) => {
          if(error) {
            throw error;
          } else {
            databd = results;

            if(databd === null) {
              res.send("Usuario no valido");
            }

            if (correo !== databd[0].correo || password !== databd[0].password) {
              res.send("Usuario no valido");
            }

            res.send("Usuario valido");
          }
    });
  },
  async registro(req, res) {
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const tipoDocumento = req.body.tipoDocumento;
    const documento = req.body.documento;
    const correo = req.body.correo;
    const fecha = req.body.fecha;
    const ciudad = req.body.ciudad;
    const telefono = req.body.telefono;
    const usuario = req.body.usuario;
    const password = req.body.password;

    let databd = null;
    const conn = await database.connection();
    await conn.query("INSERT INTO usuarios (nombres, apellidos, tipo_documento, numero_documento, correo, fecha_nacimiento, ciudad_nacimiento, telefono, usuario, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nombres, apellidos, tipoDocumento, documento, correo, fecha, ciudad, telefono, usuario, password],
      (error, results) => {
          if(error) {
            throw error;
          } else {
            databd = results;
            res.send("Usuario registrado");
          }
    });
  }
};
