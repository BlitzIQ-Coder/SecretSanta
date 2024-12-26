document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Fetch the JSON file containing email-to-page mapping
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data[email]) {
                // Redirect to the specific page for the user
                window.location.href = data[email];
            } 
        })
        .catch(error => {
            console.error('Error loading email data:', error);
        });
});
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Fetch the JSON file containing email-to-page mapping
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data[email]) {
                // Redirect to the specific page for the user
                window.location.href = data[email];
            } else {
                // Show custom alert modal
                showModal();
            }
        })
        .catch(error => {
            console.error('Error loading email data:', error);
        });
});

// Show the custom modal
function showModal() {
    const modal = document.getElementById('customAlert');
    modal.style.display = 'flex'; // Display the modal

    // Close the modal when the close button is clicked
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
