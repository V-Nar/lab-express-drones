// Iteration #1
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const droneSchema = new Schema(
    {
        name: Schema.Types.String,
        propellers: Schema.Types.Number,
        maxSpeed: Schema.Types.Number,
    }
)

const Drone = mongoose.model('Drone', droneSchema)

module.exports = Drone