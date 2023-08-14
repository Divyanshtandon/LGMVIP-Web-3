document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const displaySkills = document.getElementById('display-skills');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const url = document.getElementById('url').value;
        const photoURL = document.getElementById('photo').value;
        const gender = document.getElementById('gender').value;

        const skillsList = [];
        const skillsCheckboxes = document.getElementsByName('skills');
        for (let checkbox of skillsCheckboxes) {
            if (checkbox.checked) {
                skillsList.push(checkbox.value);
            }
        }
        const skills = skillsList.join(', ');

        const detailsHTML = `
            <div class="details-box">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website:</strong> <a href="${url}" target="_blank">${url}</a></p>
                <p><strong>Photo:</strong></p>
                <img src="${photoURL}" alt="User Photo" style="max-width: 300px;">
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            </div>
        `;

        displaySkills.innerHTML = detailsHTML;
        form.reset();
    });
});
