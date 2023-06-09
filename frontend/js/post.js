async function postComplaints() {
  fetch('http://localhost:8080/api/complaints', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title: userTitle,
      body: userBody,
    }),
  }).catch((err) => console.log(err));
}
// postComplaints();
function sendData() {
  userTitle = document.getElementById('title').value;
  userBody = document.getElementById('body').value;
  postComplaints();
}
