// where we write our Knex queries
const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

//add, find, findById, remove, update

module.exports = {
    add,
    find
}

async function add(lesson) {
    const [id] = await db('lessons').insert(lesson) // anytime you do an insert, you need to add async and await

    return id
}

function find() {
    return db('lessons')
}