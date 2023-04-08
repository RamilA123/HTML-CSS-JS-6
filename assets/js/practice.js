'use strict'

// let students = [
//     {
//         name: "Musa",
//         surname: "Afandiyev",
//         age: 19
//     },
//     {
//         name: "Ramil",
//         surname: "Allahverdiyev",
//         age: 26
//     },
//     {
//         name: "Rasul",
//         surname: "Hesenov",
//         age: 15
//     },
//     {
//         name: "Novreste",
//         surname: "Aslanzade",
//         age: 19
//     },
//     {
//         name: "Imran",
//         surname: "Haqverdiyev",
//         age: 19
//     },
// ]



// // getFilterByName("r");
// // function getFilterByName(str){
// //     setTimeout(() => {
// //         let result = students.filter(m => m.name.includes(str));
// //         console.log(result);
// //     }, 3000);
// // }

// let ul = document.querySelector("ul");

// function getStudents()
// {
//     let str = "";
//     setTimeout(() => {
//       students.forEach(student => {
//         str += `<li class="list-group-item"><b>${student.name}</b> - <b>${student.surname}</b> - <b>${student.age}</b></li>`
//         ul.innerHTML = str;
//       });
//     }, 2000);
// }

// function createStudent(student)
// {
//     return new Promise((resolved,rejected) => {
//         setTimeout(() =>{
//             students.push(student);
//             let err = true;
//             if (!err){
//                 resolved(students);
//             }
//             else{
//                 rejected("Failed");
//             }
//         },3000)
//     });
// }

// createStudent({name: "Anar", surname: "Huseynov", age: 36}).then(response =>{
// }).catch(err => {
//     console.log(err);
// })

// let ul = document.querySelector("ul");
// let tableBody = document.querySelector("tbody");



// getAllPosts();

// function getAllPosts() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => {
//       json.forEach(data => {
//         tableBody.innerHTML += `<tr data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 <td>${data.id}</td>
//                 <td>${data.userId}</td>
//                 <td>${data.title}</td>
//                 <td>${data.body}</td>
//                 </tr>`
//       });
//     })
// }


// setTimeout(() => {
//   let tableRows = document.querySelectorAll("tr");
//   for (const tr of tableRows) {
//     tr.addEventListener("click", function () {
//       let id = parseInt(this.getAttribute("data-id"));
//       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(response => response.json())
//         .then(json => {
//           let modalTitle = document.querySelector(".modal-title");
//           let modalBody = document.querySelector(".modal-body");
//           modalTitle.innerText = json.title;
//           modalBody.innerText = json.body;
//         })
//     })
//   }
// },1000);

// async function getPosts(){
//   let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//   let response = await data.json();
//   console.log(response);
// }

// getPosts();


// $(function(){
//   $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success: function(result){
//     console.log(result);
//   }});
// })




