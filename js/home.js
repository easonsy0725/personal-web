function tryProject1() {
  fetch('/project1')
    .then(response => response.text())
    .then(data => {
      document.getElementById('project1-output').textContent = data;
    });
}

function tryProject2() {
  fetch('/project2')
    .then(response => response.text())
    .then(data => {
      document.getElementById('project2-output').textContent = data;
    });
}