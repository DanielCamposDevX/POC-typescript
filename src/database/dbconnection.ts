import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "dani5592",
    database: "postgres"
})

export { db };


async function testarConexao() {
  try {
    await db.query('SELECT version()');
    console.log('Conexão bem-sucedida!');

  } catch (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
  } 
}

// Chama a função para verificar a conexão
testarConexao();
