import pg from 'pg';
const { Client } = pg;
const config = {
    user: 'bd_nexum_user',
    password: '4o4B5Ir5ow2bGVFZPBNz84nCswNt0yhS',
    database: 'bd_nexum',
    host: 'dpg-d17c482dbo4c73fp8p2g-a.oregon-postgres.render.com',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log('Conexión exitosa a la base de datos');
        return cliente;
    } catch (error) {
        console.log('Error al conectar a la base de datos');
        throw error;
    }
}