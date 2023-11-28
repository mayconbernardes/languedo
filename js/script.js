document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        submitForm();
    });

    function submitForm() {
        var nameInput = document.getElementById('name');
        var email = document.getElementById('email').value;
        var match = peopleDatabase.find(function(person) {
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

var peopleDatabase = [
    { name: "maycon", email: "maycon@example.com" },
    { name: "Jane kawtar", email: "kawtar@example.com" },
    { name: "karim", email: "karim@example.com" }
];

// Add event listener to open the form
document.addEventListener('DOMContentLoaded', function() {
    var contentBtn = document.querySelector('.content');
    contentBtn.addEventListener('click', function() {
        // Replace 'yourFormId' with the actual ID of your form
        document.getElementById('yourFormId').style.display = 'block';
    });
});

