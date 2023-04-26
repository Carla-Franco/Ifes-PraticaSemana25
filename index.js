const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err) => {
if (err) {
return console.error(err.message);
}

/*db.run("CREATE TABLE aluno (matricula int, nome varchar(60), email varchar(40), cidade varchar(60) )");*/
  
/*db.run("INSERT INTO ALUNO(MATRICULA, NOME, EMAIL, CIDADE) VALUES(1986, 'CARLA IRENE RIBEIRO FRANCO', 'RONCARCLA18@GMAIL.COM', 'DOMINGOS MARTINS')");
db.run("INSERT INTO ALUNO(MATRICULA, NOME, EMAIL, CIDADE) VALUES(2009, 'CLARA RIBEIRO FRANCO', 'CACARFRANCO09@GMAIL.COM', 'VITÓRIA')");
db.run("INSERT INTO ALUNO(MATRICULA, NOME, EMAIL, CIDADE) VALUES(1989, 'RONDONITO MEDEIROS FRANCO', 'KSCORITO@GMAIL.COM', 'MARECHAL FLORIANO')");*/
  
db.each("select matricula, nome from aluno", (err, row) => {
if (err) {
console.error(err.message);
}
console.log(row.matricula + "\t" + row.nome); });
});