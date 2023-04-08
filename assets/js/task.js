let button = document.querySelector("button");
let tableBody = document.querySelector("tbody");

getAllComments();

function getAllComments() {

  button.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        json.forEach(data => {
          tableBody.innerHTML += `<tr>
              <td>${data.postId}</td>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td>${data.email}</td>
              <td>${data.body}</td>
              </tr>`
        });
      })
  })

}