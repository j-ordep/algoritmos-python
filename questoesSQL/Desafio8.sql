--  8 – Escreva o comando SQL necessário para excluir todos os clientes que possuam o sobrenome 
--  ‘santos’.

DELETE FROM clientes
WHERE nome LIKE '%santos%';