/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function(knex, Promise){
    // Delete all existing entries
    return knex('users')
    .del()
    .then(() => {
        return knex('users').insert([
            {first_name: "Onemo", last_name: "Kang", email: "onemo.kang@gmail.com"},
            {first_name: "SpongeBob", last_name: "SquarePants", email: "spongebob.squarepants@gmail.com"},
            {first_name: "Squidward", last_name: "Tentacles", email: "squidward.tentacles@gmail.com"},
        ])
    }

    ) 
}