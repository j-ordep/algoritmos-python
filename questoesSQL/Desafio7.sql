--  7 - Escreva uma consulta SQL que exiba o nome dos clientes e a quantidade de telefones 
--  encontrados. A consulta deverá exibir somente o nome dos clientes que possuam pelo menos 1 
--  telefone.


SELECT
    c.nome, COUNT(t.telefone)
FROM
    clientes c
JOIN
    telefones t ON c.cpf = t.cpf_cliente
GROUP BY
    c.nome
HAVING COUNT(t.telefone) > 0;