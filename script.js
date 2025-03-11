// Ambil elemen-elemen yang diperlukan
const usernameInput = document.getElementById("username-input");
const usernameDisplay = document.getElementById("username-display");
const btnSubmitName = document.getElementById("btn-submit-name");

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formResult = document.getElementById("result-display");

    // Event: Mengisi teks "Hi Name"
    if (btnSubmitName) {
        btnSubmitName.addEventListener("click", function () {
            const nameValue = usernameInput.value.trim();
            if (nameValue !== "") {
                usernameDisplay.textContent = nameValue;
            } else {
                alert("Mohon masukkan nama terlebih dahulu!");
            }
        });
    }

    // Event: Validasi Form "Message Us" dan menampilkan hasilnya
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Mencegah reload halaman

            // Ambil nilai dari form
            const name = document.getElementById("name").value.trim();
            const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
const dobElement = document.getElementById("dob");
const dob = dobElement ? dobElement.value.trim() : '';

            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validasi sederhana
if (!name || !email || !phone || !message || !gender || dob === '') {

                alert("Mohon isi semua field sebelum submit!");
                return;
            }

            // Contoh validasi email sederhana
            if (!validateEmail(email)) {
                alert("Format email tidak valid!");
                return;
            }

            // Tampilkan hasil input di div "formResult"
            formResult.innerHTML = `
                <h3>Hasil Submit:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
        });
    }
});

// Fungsi validasi email sederhana
function validateEmail(email) {
    // Regex sederhana untuk contoh validasi email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
