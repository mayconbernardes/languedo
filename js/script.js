document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        submitForm();
    });

    function submitForm() {
        let nameInput = document.getElementById('name');
        let email = document.getElementById('email').value;
        let match = peopleDatabase.find(function(person) {
            return person.name.toLowerCase() === nameInput.value.toLowerCase() && person.email === email;
        });

        if (match) {
            alert(`Nom: ${nameInput.value}\nE-mail: ${email}`);
            window.location.href = 'main.html';
        } else {
            alert('Utilisateur non trouvé.');
        }
    }
});

let peopleDatabase = [
    { name: "maycon", email: "maycon@example.com" },
    { name: "kawtar", email: "kawtar@example.com" },
    { name: "karim", email: "karim@example.com" }
];

// Add event listener to open the form
document.addEventListener('DOMContentLoaded', function() {
    let contentBtn = document.querySelector('.content');
    contentBtn.addEventListener('click', function() {
        // Replace 'yourFormId' with the actual ID of your form
        document.getElementById('yourFormId').style.display = 'block';
    });
});

document.getElementsByClassName('grid-item').addEventListener('click', function () {
    // Redirect to the main.html page when the button is clicked
    window.location.href = 'main.html';
});