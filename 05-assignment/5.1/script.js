const form = document.getElementById("employeeData");
const tbody = document.querySelector("tbody");

let employees = JSON.parse(localStorage.getItem("employees")) || [];
employees.forEach(emp => addRow(emp));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emp = {
        name: document.getElementById("empname").value,
        dept: document.getElementById("empdept").value,
        id: document.getElementById("empid").value,
        city: document.getElementById("empcity").value,
        address: document.getElementById("empaddress").value
    };

    employees.push(emp);

    localStorage.setItem("employees", JSON.stringify(employees));

    addRow(emp);

    form.reset();
});

function addRow(emp) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.dept}</td>
        <td>${emp.id}</td>
        <td>${emp.city}</td>
        <td>${emp.address}</td>
    `;
    tbody.appendChild(row);
}

function clearData() {
    localStorage.removeItem("employees");
    tbody.innerHTML = "";
    employees = [];
}