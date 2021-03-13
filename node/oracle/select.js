const oracledb = require('oracledb')
const dbConfig = require('./arquivo.json')

//console.log(dbConfig.db.query)

async function run() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig.db)
        const result = await connection.execute(
            // The statement to execute
            dbConfig.db.query,{}, {outFormat : oracledb.OBJECT}
        );
        console.log(result.rows)
    } catch (err) {
        console.error(err)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (err) {
                console.error(err)
            }
        }
    }
}
run()

console.log('Teste')