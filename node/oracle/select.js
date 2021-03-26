const oracledb = require('oracledb')
const dbConfig = require('./arquivo.json')

async function run() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig.db)
        const result = await connection.execute(
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

