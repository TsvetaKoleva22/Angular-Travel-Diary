const express = require('express')
// const authCheck = require('../config/auth-check')
const Adventure = require('../models/Adv')

const router = new express.Router()

function validateAdvCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''


  if (!payload || typeof payload.title !== 'string' || payload.title.length < 3) {
    isFormValid = false
    errors.name = 'Title must be at least 3 symbols.'
  }

  if (!payload || typeof payload.imageUrl !== 'string' || !(payload.imageUrl.startsWith('https://') || payload.imageUrl.startsWith('http://'))) {
    isFormValid = false
    errors.image = 'Please enter valid Image URL.'
  }

  if (!payload || typeof payload.destination !== 'string' || payload.destination.length < 2) {
    isFormValid = false
    errors.name = 'Destination must be at least 2 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 500) {
    isFormValid = false
    errors.description = 'Description must be at least 10 symbols and less than 500 symbols.'
  }

  if (!payload || payload.category === "") {
    isFormValid = false
    errors.description = 'Please choose a category.'
  }



  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

// router.post('/create', authCheck, (req, res) => {
router.post('/create', (req, res) => {
  const advObj = req.body
  const validationResult = validateAdvCreateForm(advObj)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Adventure
    .create(advObj)
    .then((createdAdv) => {
      res.status(200).json({
        success: true,
        message: 'Adventure added successfully.',
        data: createdAdv
      })
    })
    .catch((err) => {
      console.log(err)
      let message = 'Something went wrong :( Check the form for errors.'
      if (err.code === 11000) {
        message = 'Adventure with the given name already exists.'
      }
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.get('/all', (req, res) => {
  Adventure
    .find()
    .then(adventures => {
      res.status(200).json(adventures)
    })
})

router.post('/edit/:id', (req, res) => {
  const advId = req.params.id
  const advObj = req.body
  const validationResult = validateAdvCreateForm(advObj)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Adventure
    .findById(advId)
    .then(existingAdv => {
      existingAdv.title = advObj.title
      existingAdv.imageUrl = advObj.imageUrl
      existingAdv.destination = advObj.destination
      existingAdv.description = advObj.description

      existingAdv
        .save()
        .then(editedAdv => {
          res.status(200).json({
            success: true,
            message: 'Adventure edited successfully.',
            data: editedAdv
          })
        })
        .catch((err) => {
          console.log(err)
          let message = 'Something went wrong :( Check the form for errors.'
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/like/:id', (req, res) => {
  const advId = req.params.id
  const advObj = req.body

  Adventure
    .findById(advId)
    .then(existingAdv => {
      existingAdv.likes = advObj.likes

      existingAdv
        .save()
        .then(editedAdv => {
          res.status(200).json({
            success: true,
            message: 'Like added successfully.',
            data: editedAdv
          })
        })
        .catch((err) => {
          console.log(err)
          let message = 'Something went wrong :( Check the form for errors.'
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Adventure
    .findById(id)
    .then((advent) => {
      advent
        .remove()
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'Adventure deleted successfully!'
          })
        })
    })
    .catch(() => {
      return res.status(200).json({
        success: false,
        message: 'Entry does not exist!'
      })
    })
})

module.exports = router
