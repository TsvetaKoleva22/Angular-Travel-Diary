const express = require('express')
// const authCheck = require('../config/auth-check')
const Category = require('../models/Category')

const router = new express.Router()

function validateCatCreateForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Category name must be at least 3 symbols.'
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

router.post('/create', (req, res) => {
  const catObj = req.body

  const validationResult = validateCatCreateForm(catObj)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  Category
    .create(catObj)
    .then((createdCat) => {
      res.status(200).json({
        success: true,
        message: 'Category created successfully.',
        data: createdCat
      })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      if (err.code === 11000) {
        message = 'Category with the given name already exists.'
      }
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.get('/all', (req, res) => {
  Category
    .find()
    .then(categories => {
      res.status(200).json(categories)
    })
})

module.exports = router
