// Iteration #1
const mongoose = require('mongoose')

const Drone = require('../models/Drone.model')
require('../db')

const drones = [
    { 
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    { 
        name: 'Racer 57', 
        propellers: 4, 
        maxSpeed: 20 
    },
    { 
        name: 'Courier 3000i', 
        propellers: 6, 
        maxSpeed: 18 
    },
  ]



const seedDatas = async() => {
    try {
        await Drone.deleteMany()
        await Drone.create(drones)
        const numDrones = await Drone.estimatedDocumentCount()
        console.log(`${numDrones} documents have been created`)
    } catch (error){
        console.log(error)
    }
}

seedDatas()
    .then(() => {
        mongoose.disconnect()
    })
