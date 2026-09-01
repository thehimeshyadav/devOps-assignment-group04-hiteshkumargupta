$(document).ready(function () {

    // =========================
    // REGISTER
    // =========================

    $("#registerForm").submit(function (e) {

        e.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        if (!name || !email || !password || !confirmPassword) {

            $("#registerMessage")
                .text("Please fill all fields.")
                .removeClass("text-green-600")
                .addClass("text-red-600");

            return;
        }

        if (password.length < 6) {

            $("#registerMessage")
                .text("Password must contain at least 6 characters.")
                .removeClass("text-green-600")
                .addClass("text-red-600");

            return;
        }

        if (password !== confirmPassword) {

            $("#registerMessage")
                .text("Passwords do not match.")
                .removeClass("text-green-600")
                .addClass("text-red-600");

            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("studentUser", JSON.stringify(user));

        $("#registerMessage")
            .text("Registration successful! Redirecting...")
            .removeClass("text-red-600")
            .addClass("text-green-600");

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    });


    // =========================
    // LOGIN
    // =========================

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        const email = $("#loginEmail").val().trim();
        const password = $("#loginPassword").val();

        const storedUser = localStorage.getItem("studentUser");

        if (!storedUser) {

            $("#loginMessage")
                .text("Please register first.")
                .addClass("text-red-600");

            return;
        }

        const user = JSON.parse(storedUser);

        if (email === user.email && password === user.password) {

            localStorage.setItem("isLoggedIn", "true");

            $("#loginMessage")
                .text("Login successful!")
                .removeClass("text-red-600")
                .addClass("text-green-600");

            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 800);

        } else {

            $("#loginMessage")
                .text("Invalid email or password.")
                .removeClass("text-green-600")
                .addClass("text-red-600");
        }

    });


    // =========================
    // DASHBOARD USER NAME
    // =========================

    const storedUser = localStorage.getItem("studentUser");

    if (storedUser) {

        const user = JSON.parse(storedUser);

        $("#dashboardName").text(user.name);
        $("#profileName").text(user.name);
        $("#profileEmail").text(user.email);

        $("#profileNameInput").val(user.name);
        $("#profileEmailInput").val(user.email);
    }


    // =========================
    // LOGOUT
    // =========================

    $("#logoutBtn").click(function () {

        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";

    });


    // =========================
    // SKILL SEARCH
    // =========================

    $("#searchSkill").on("keyup", function () {

        const searchText = $(this).val().toLowerCase();

        $(".skill-card").each(function () {

            const skillName =
                $(this).data("name").toLowerCase();

            if (skillName.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    });


    // =========================
    // CATEGORY FILTER
    // =========================

    $("#categoryFilter").change(function () {

        const category = $(this).val();

        $(".skill-card").each(function () {

            const skillCategory =
                $(this).data("category");

            if (category === "all" ||
                skillCategory === category) {

                $(this).show();

            } else {

                $(this).hide();

            }

        });

    });


    // =========================
    // ADD SKILL
    // =========================

    $("#skillForm").submit(function (e) {

        e.preventDefault();

        const name = $("#skillName").val().trim();
        const category = $("#skillCategory").val();
        const level = $("#skillLevel").val();
        const description = $("#skillDescription").val().trim();

        if (!name || !category || !level || !description) {

            $("#skillMessage")
                .text("Please fill all fields.")
                .removeClass("text-green-600")
                .addClass("text-red-600");

            return;
        }

        $("#skillMessage")
            .text("Skill added successfully!")
            .removeClass("text-red-600")
            .addClass("text-green-600");

        $("#skillForm")[0].reset();

    });


    // =========================
    // SAVE PROFILE
    // =========================

    $("#saveProfile").click(function () {

        const name = $("#profileNameInput").val();
        const email = $("#profileEmailInput").val();

        if (!name || !email) {

            $("#profileMessage")
                .text("Please enter your name and email.")
                .addClass("text-red-600");

            return;
        }

        let user = {
            name: name,
            email: email
        };

        localStorage.setItem(
            "studentUser",
            JSON.stringify(user)
        );

        $("#profileName").text(name);
        $("#profileEmail").text(email);

        $("#profileMessage")
            .text("Profile updated successfully!")
            .removeClass("text-red-600")
            .addClass("text-green-600");

    });


    // =========================
    // VIEW SKILL BUTTON
    // =========================

    $(".view-btn").click(function () {

        const skillName =
            $(this).siblings("h2").text();

        alert(
            "Skill: " + skillName +
            "\n\nYou can connect with the student who offers this skill."
        );

    });

});