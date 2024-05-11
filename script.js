function sortStudents() {
  var numStudents = document.getElementById("numStudents").value;
  var studentNames = document.getElementById("studentNames").value.split(" ");
  studentNames.sort();
  var sortedNamesList = document.getElementById("sortedNames");
  sortedNamesList.innerHTML = ""; // Clear previous results
  studentNames.forEach(function(name) {
    var listItem = document.createElement("li");
    listItem.textContent = name;
    sortedNamesList.appendChild(listItem);
  });
}
