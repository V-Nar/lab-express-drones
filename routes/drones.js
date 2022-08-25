const express = require('express')
const router = express.Router()

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const droneList = await Drone.find(req.body)
    res.json(droneList)
  } catch(error){
    next(error)
  }
})

router.post('/drones', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const { name, propellers, maxSpeed } = req.body
    const newDrone = await Drone.create({
      name,
      propellers,
      maxSpeed,
    })
    res.status(201).json({newDrone})
  } catch (error) {
    return res.status(400).json({ message: `BAD REQUEST`})
  }
})

router.post('/drones/:id', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({ message: `the drone cannot be found matching that id`})
    }
    const { name, propellers, maxSpeed } = req.body
    const updDrone = await Drone.findByIdAndUpdate(
      id,
      {
        name,
        propellers,
        maxSpeed,
      },
      {new: true},
    )
    res.status(200).json({ updDrone })
  } catch(error) {
    return res.status(400).json({ message: `please enter correct values` })
  }
})

router.delete('/drones/:id', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  await Drone.findByIdAndDelete(id)
  res.status(204).json({ message: `Drone deleted`})
})

module.exports = router
