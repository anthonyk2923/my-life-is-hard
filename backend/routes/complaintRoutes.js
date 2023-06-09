const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

router
  .route('/')
  .get(complaintController.getComplaints)
  .post(complaintController.createComplaint);
//  .delete(complaintController.deleteAllComplaints);
router
  .route('/:id')
  .put(complaintController.updateComplaint)
  .delete(complaintController.deleteComplaint);

module.exports = router;
