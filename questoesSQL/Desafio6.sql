--  6 - Escreva uma consulta SQL para obter o nome de todos os clientes que possuam idade igual 
--  ou superior a 22 anos. O resultado deverá estar ordenado pela idade de forma crescente

SELECT 
    clientes.nome
FROM
    clientes
WHERE
    idade >= 22
ORDER BY idade ASC;