"use strict";

// To add a new CD to the table, I will get the form element and add an event listener to it as im doing below
document.getElementById("cd-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Here I am getting the input values and storing them in variables
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const year = document.getElementById("year").value;
  // Here I am getting the table body and creating a new row
  const tableBody = document.querySelector("#cd-table tbody");
  const row = document.createElement("tr");

  // Here I am creating a new row with the input values and a delete button in innerHTML
  row.innerHTML = `
        <td>${title}</td>
        <td>${artist}</td>
        <td>${year}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

  tableBody.appendChild(row);

  // Here I reset the input fields after adding a new row
  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("year").value = "";

  // Here I am adding an event listener to the delete button
  row.querySelector(".delete-btn").addEventListener("click", function () {
    tableBody.removeChild(row);
  });
});
