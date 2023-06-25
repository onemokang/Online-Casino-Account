/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function(knex, Promise){
    // Delete all existing entries
    return knex('locations')
    .del()
    .then(() => {
        return knex('locations').insert([
            {name: "Monte Fortuna", address: "Pl. du Casino, 999 Monaco", number: "+377 98 06 21 21"},
            {name: "Tokyo", address: "", number: ""},
            {name: "Seoul", address: "", number: ""},
        ])
    })
    // Reset the table that tracks the auto-incrementing number; needed for using foreign keys to maintain the same id for each value
    .then(() => {
        return knex.raw(
            `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
        );
    });
};