
document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const tableBody = document.getElementById('studentTableBody');
    const emptyPlaceholder = document.getElementById('emptyPlaceholder');

    studentForm.addEventListener('submit', (event) => { 
        event.preventDefault();

        if (validateForm()) {
        
            const formData = extractFormData();
            
            insertTableRow(formData);

            if (emptyPlaceholder) {
                emptyPlaceholder.remove();
            }

            studentForm.reset();

            clearValidationState();
        }
    });

    function extractFormData() {
        // Radio button requires querying the currently checked element in the group
        const selectedGender = document.querySelector('input[name="gender"]:checked');

        return {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            address: document.getElementById('address').value.trim(),
            pincode: document.getElementById('pincode').value.trim(),
            gender: selectedGender ? selectedGender.value : '',
            state: document.getElementById('state').value.trim(),
            country: document.getElementById('country').value.trim()
        };
    }
    
    function validateForm() {
        let isValid = true;

        const fields = [
            'firstName',
            'lastName',
            'email',
            'address',
            'pincode',
            'state',
            'country'
        ];

        fields.forEach((fieldId) => {
            const input = document.getElementById(fieldId);
            const parentGroup = input.closest('.form-group');

            if (!input.value.trim()) {
                parentGroup.classList.add('has-error');
                isValid = false;
            } else {
                parentGroup.classList.remove('has-error');
            }
        });
        
        const emailInput = document.getElementById('email');
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('genderError');
        const genderGroup = genderError.closest('.form-group');

        if (!genderSelected) {
            genderGroup.classList.add('has-error');
            isValid = false;
        } else {
            genderGroup.classList.remove('has-error');
        }
        return isValid;
    }

    function insertTableRow(data) {
        const row = document.createElement('tr');

        const cellKeys = [
            'firstName',
            'lastName',
            'email',
            'address',
            'pincode',
            'gender',
            'state',
            'country'
        ];

        cellKeys.forEach((key) => {
            const td = document.createElement('td');
            td.textContent = data[key]; 
            row.appendChild(td);
        });

        tableBody.appendChild(row);
    }

    function clearValidationState() {
        const errorGroups = document.querySelectorAll('.form-group.has-error');
        errorGroups.forEach((group) => {
            group.classList.remove('has-error');
        });
    }
});