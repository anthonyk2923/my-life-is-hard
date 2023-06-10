//GET ALL
//@GET /API/COMPLAINTS
let allComplaints = null;

// class complaint {
//   constructor(id, createdAt, title, body) {
//     this.id = id;
//     this.createdAt = createdAt;
//     this.title = title;
//     this.body = body;
//   }
// }

function getComplaints() {
  return fetch('https://my-life-is-hard.herokuapp.com/api/complaints')
    .then((res) => res.json())
    .then((res) => (allComplaints = res))
    .catch((err) => console.log(err));
}
const handler = async () => {
  await getComplaints();

  const stringifed = JSON.stringify(allComplaints);
  console.log(stringifed.length);
  if (stringifed.length != 2) {
    document.getElementById('cards-parent-container').innerHTML = '';
  }
  for (const i of allComplaints.reverse()) {
    document.getElementById('cards-parent-container').innerHTML += `
    <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">${
          i.title
            ? i.title
            : '<span class="text-danger">Error: Title not found<span>'
        }</h5>
        <p class="card-text">${
          i.body
            ? i.body
            : '<span class="text-danger">Error: Body not found<span>'
        }</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">${
          i.createdAt
            ? 'Created on: ' + i.createdAt.slice(0, 10)
            : '<span class="text-danger">Error: Creation date not found<span>'
        }</small>
      </div>
    </div>
  </div>`;
  }
  console.log(document.getElementById('cards-parent-container').innerHTML);
  if (
    document.getElementById('cards-parent-container').innerHTML == 'loading...'
  ) {
    document.getElementById('empty').innerHTML = '<h1> 🙁 No Posts Yet 🙁<h1>';
    document.getElementById('cards-parent-container').innerHTML = '';
  }
};

handler();
