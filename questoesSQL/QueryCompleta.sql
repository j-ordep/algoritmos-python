CREATE TABLE clientes(
    cpf CHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE telefones(
    cpf_cliente CHAR(11),
    ddd CHAR(2),
    telefone CHAR(9),
    PRIMARY KEY (cpf_cliente),
    FOREIGN KEY (cpf_cliente) REFERENCES clientes(cpf)
)


SELECT 
    clientes.nome
FROM
    clientes
WHERE
    idade >= 22
ORDER BY idade ASC;


SELECT
    c.nome, COUNT(t.telefone)
FROM
    clientes c
JOIN
    telefones t ON c.cpf = t.cpf_cliente
GROUP BY
    c.nome
HAVING COUNT(t.telefone) > 0;

DELETE FROM clientes
WHERE nome LIKE '% santos';

