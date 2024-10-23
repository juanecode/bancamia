# bancamia
prueba técnica

# Instalacion

- Es necesario cambiar el nombre del archivo .env-ejemplo a .env
- Es necesario configurar el archivo .env con los datos de conexion a la base de datos mysql
- Dentro de la base de datos referenciada en el archivo .env es necesario crear la siguiente tabla
<pre><code>
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    tipo_documento VARCHAR(50) NOT NULL,
    numero_documento VARCHAR(50) NOT NULL UNIQUE,
    correo VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    ciudad_nacimiento VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
</code></pre>
- Es necesario tener instalado [nodejs](https://nodejs.org/en/download/package-manager)
- Es necesario instalar las dependencias por medio del comando
<pre><code>npm install</code></pre>
- al momento de ejecutar es necesario correr el comando
<pre><code>npm run start</code></pre>
- Uso de la aplicacion [login bancamia](http:localhost:3002/)