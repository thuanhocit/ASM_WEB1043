document.addEventListener("DOMContentLoaded", function () {
    // Handle signup form submission
    var btn__submitSignup = document.querySelector('#btn-submitSignup');
    btn__submitSignup.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        var username = document.getElementById('txtEmail').value;
        var password = document.getElementById('txtPassWord').value;

        if (username == "" || password == "") {
            alert("Vui lòng nhập đủ thông tin!");
            return; // Stop execution if fields are empty
        }

        var user = {
            username: username,
            password: password,
        };

        var json = JSON.stringify(user);

        localStorage.setItem("user", json); // Store user information in localStorage

        window.location.href = "index.html"; // Redirect to login page after successful signup
    });

    // Handle login form submission
    var btn__submitLogin = document.querySelector('#btn-submitLogin');
    btn__submitLogin.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        var username = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassWord').value;

        var user = localStorage.getItem("user");

        if (!user) {
            alert("Tài khoản không tồn tại!");
            return; // Stop execution if no user is found
        }

        var data = JSON.parse(user);

        if (username == "" || password == "") {
            alert("Vui lòng nhập đủ thông tin!");
        }
        else if (username != data.username || password != data.password) {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
        else if (username == data.username && password == data.password) {
            localStorage.setItem('Login', true);

            // Custom popup notification
            if (confirm("Đăng nhập thành công! Ấn OK để tiếp tục.")) {
                window.location.href = 'loading.html'; // Redirect to loading page
            }
        }
    });
});
