CREATE DATABASE reeco;

USE reeco;

DROP TABLE usuario;
CREATE TABLE usuario(
id INT PRIMARY KEY,
nome VARCHAR(255),
email VARCHAR(255) UNIQUE NOT NULL,
idade INT
);

SELECT UPPER(nome) FROM usuario;

DESCRIBE usuario;
