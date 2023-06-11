// postComplaints();

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  userTitle = document.getElementById('title').value;
  userBody = document.getElementById('body').value;
  await fetch('https://my-life-is-hard.herokuapp.com/api/complaints/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title: userTitle,
      body: userBody,
    }),
  }).catch((err) => console.log(err));
  window.location.href = './index.html';
});
