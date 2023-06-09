const getComplaints = (req, res) => {
  res.status(200).json({ message: 'Get complaints' });
};
const createComplaint = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text field');
  }
  res.status(200).json({ message: 'Create complaint' });
};
const updateComplaint = (req, res) => {
  res.status(200).json({ message: `Update complaint ${req.params.id}` });
};
const deleteComplaint = (req, res) => {
  res.status(200).json({ message: `Delete complaint ${req.params.id}` });
};
module.exports = {
  getComplaints,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};
