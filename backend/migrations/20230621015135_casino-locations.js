/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id');
    table.string('name').notNullable().defaultsTo('');
    table.string('address').notNullable().defaultsTo('');
    table.string('number').notNullable().defaultsTo('123-456-7890');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
