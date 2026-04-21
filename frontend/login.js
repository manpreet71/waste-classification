function switchTab(type) {
    const userForm  = document.getElementById('user-form');
    const adminForm = document.getElementById('admin-form');
    const userTab   = document.getElementById('user-tab');
    const adminTab  = document.getElementById('admin-tab');

    if (type === 'user') {
        userForm.hidden  = false;
        adminForm.hidden = true;
        userTab.classList.add('active');
        adminTab.classList.remove('active');
    } else {
        userForm.hidden  = true;
        adminForm.hidden = false;
        adminTab.classList.add('active');
        userTab.classList.remove('active');
    }
}

function handleLogin(type) {
    if (type === 'user') {
        sessionStorage.setItem('role', 'user');
        sessionStorage.setItem('loggedIn', 'true');
        alert('User login successful! Redirecting...');
        window.location.href = 'index.html';
    } else {
        sessionStorage.setItem('role', 'admin');
        sessionStorage.setItem('loggedIn', 'true');
        alert('Admin login successful! Redirecting to admin panel...');
        window.location.href = 'admin.html';
    }
}