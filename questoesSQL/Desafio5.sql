--  5 - Escreva o script necessário para a criação de uma tabela chamada CLIENTES e outra 
--  chamada TELEFONES. A tabela CLIENTES deverá possuir os seguintes campos: NOME, CPF 
--  e IDADE sendo o CPF a chave primária.
--  A tabela TELEFONES deverá possuir três campos, sendo eles: CPF_CLIENTE, DDD e 
--  TELEFONE, para esta tabela o campo CPF_CLIENTE deverá ser a chave primária e estrangeira 
--  (referenciando o campo CPF da tabela CLIENTES)

CREATE TABLE clientes(
    cpf CHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE telefones(
    cpf_cliente CHAR(11),
    ddd CHAR(3),
    telefone CHAR(9),
    PRIMARY KEY (cpf_cliente),
    FOREIGN KEY (cpf_cliente) REFERENCES clientes(cpf)
)
