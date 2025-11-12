# notas-atletas
Projeto Devstart
# Projeto Notas dos Atletas

Aplicação em JavaScript que recebe o nome e as notas de atletas de ginástica artística, calcula a média válida das notas e apresenta os resultados no console.

## Descrição
Cada atleta recebe cinco notas de jurados, entre 1 e 10.  
A média é calculada com base nas três notas do meio, desconsiderando a maior e a menor nota.

## Funcionalidades
- Recebe uma lista de atletas e suas notas  
- Ordena as notas de cada atleta  
- Remove a maior e a menor nota  
- Calcula a média das três notas restantes  
- Exibe o nome, as notas e a média de cada atleta no console

## Exemplo de Entrada
```javascript
let atletas = [
  { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
  { nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] },
  { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
  { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
]
