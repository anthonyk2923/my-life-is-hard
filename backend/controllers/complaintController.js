const getComplaints = (req, res) => {
  res.json({ message: 'Get complaints' });
};
const createComplaint = (req, res) => {
  res.json({ message: 'Create complaint' });
};
const updateComplaint = (req, res) => {
  res.json({ message: `Update complaint ${req.params.id}` });
};
const deleteComplaint = (req, res) => {
  res.json({ message: `Delete complaint ${req.params.id}` });
};
module.exports = {
  getComplaints,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};
