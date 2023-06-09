const asyncHandler = require('express-async-handler');
const Complaint = require('../models/complaintModel');

const deleteAllComplaints = asyncHandler(async (req, res) => {
  await Complaint.deleteMany({});
  res.status(200).json('deleted');
});
const getComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find();
  res.status(200).json(complaints);
});
const createComplaint = asyncHandler(async (req, res) => {
  if (!req.body.title && !req.body.body) {
    res.status(400);
    throw new Error('Please ensure that you have added a title and body field');
  }
  const complaint = await Complaint.create({
    title: req.body.title,
    body: req.body.body,
  });
  res.status(200).json(complaint);
});
const updateComplaint = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) {
    res.status(200);
    throw new Error('Complaint not found');
  }
  const updateComplaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateComplaint);
});
const deleteComplaint = asyncHandler(async (req, res) => {
  complaint = await Complaint.findById(req.params.id);
  if (!complaint) {
    res.status(200);
    throw new Error('Complaint not found');
  }
  await Complaint.deleteOne(complaint);
  res.status(200).json(req.params.id);
});
module.exports = {
  getComplaints,
  createComplaint,
  updateComplaint,
  deleteComplaint,
  deleteAllComplaints,
};
