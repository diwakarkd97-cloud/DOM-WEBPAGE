// Find the form element on the page using its ID
const studentForm = document.getElementById('studentForm');

// Listen for the user to click the Submit button
studentForm.addEventListener('click', function(event) {
    
    event.preventDefault();    // Stop the page from reloading when the form is submitted

    const firstName = document.getElementById('firstName').value;   // Get the text that the user typed into each input box
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    
    // Find which gender radio button was selected
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const tableBody = document.getElementById('studentTableBody'); //  Find the table body where we need to put the new data
    
    //  Check if the "No records submitted yet" message is still there, and remove it
    const emptyPlaceholder = document.getElementById('emptyPlaceholder');
    if (emptyPlaceholder) {
        emptyPlaceholder.remove();
    }

    
    const newRow = document.createElement('tr');   // Create a new empty table row (<tr>)

    //  Put the user's data inside the new row as table cells (<td>)
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    
    tableBody.appendChild(newRow);   //  Add the new row to the bottom of the table

    studentForm.reset();             //  Clear all the input boxes so the form is ready for the next person
});
