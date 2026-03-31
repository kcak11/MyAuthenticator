function saveOptions() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    chrome.storage.sync.set(
        { username: username, password: password },
        () => {
            const status = document.getElementById('status');
            status.textContent = 'Credentials saved.';
            status.classList.add('success');
            setTimeout(() => {
                status.textContent = '';
                status.classList.remove('success');
            }, 750);
        }
    );
}
function restoreOptions() {
    chrome.storage.sync.get(
        { username: '', password: '' },
        (items) => {
            document.getElementById('username').value = items.username;
            document.getElementById('password').value = items.password;
        }
    );
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('togglePassword').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
    const eyeOffIcon = document.querySelector('.eye-off-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'block';
        eyeOffIcon.style.display = 'none';
    }
});