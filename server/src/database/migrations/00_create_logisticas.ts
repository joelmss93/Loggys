import knex from 'knex';
import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('logisticas', table =>{
        table.increments('id').primary();
        table.string('remetente').notNullable();
        table.string('destino').notNullable();
        table.string('localOrigem').notNullable();
        table.string('localDestino').notNullable();
        table.date('DataEnvio').notNullable();
        table.date('DtAtual').notNullable(); // Date com ultima alteração no registro
        table.string('localAtual').notNullable();
        table.decimal('foto').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('logisticas');
}