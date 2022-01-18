const mysql = require('mysql2/promise');

export const connection = mysql.createConnection({
        host: 'localhost',
        database: 'gym',
        user: 'root',
        password: 'connectKey',
        port: 3306,
});

export async function executeQuery(query, values = []) {
    try {
        const results = await connection.execute(query, values);
        await connection.escape();
        return results;
    }
    catch (e) {
        console.log(e.message);
    }
}