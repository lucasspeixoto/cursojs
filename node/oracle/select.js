
const oracledb = require('oracledb')
const dbConfig = require('./dbconfig.js')
const query = require('./query.js')

async function run() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(
            // The statement to execute
            query.oracle,{}, {outFormat : oracledb.OBJECT}
        );
        console.log(result.rows[0].NOME); 
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
run();






