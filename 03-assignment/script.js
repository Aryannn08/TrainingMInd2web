function displayData(event){
            event.preventDefault();
            const fname = document.getElementById('firstname').value;
            const lname = document.getElementById('lastname').value;
            const dob = document.getElementById('DOB').value;
            const gender = document.getElementById('selector1').value;
            const about = document.getElementById('textArea1').value;

            document.getElementById('result').innerHTML = `
            <p>First name : ${fname}</p>
            <p>Last name : ${lname}</p>
            <p>Date Of Birth : ${dob}</p>
            <p>Gender : ${gender}</p>
            <p>About : ${about}</p>
            `;
        }