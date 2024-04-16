function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("todoGitHubBtn").addEventListener("click", function () {
    window.open('https://github.com/harshkumar1302/Todo-app', '_blank');
});

document.getElementById("todoLiveDemoBtn").addEventListener("click", function () {
    window.open('https://personal-todoapp.vercel.app/', '_blank')
});

document.getElementById("portfolioGitHubBtn").addEventListener("click", function () {
    window.open('https://github.com/harshkumar1302/Portfolio-Demo', '_blank');
});

document.getElementById("portfolioLiveDemoBtn").addEventListener("click", function () {
    window.open('https://portfolio-1-harshkumar1302.vercel.app/', '_blank');
});

document.getElementById("weatherAppGitHubBtn").addEventListener("click", function () {
    window.open('https://github.com/harshkumar1302/Weather-app', '_blank');
});

document.getElementById("weatherAppLiveDemoBtn").addEventListener("click", function () {
    window.open('https://main--personal-weatherapp.netlify.app/', '_blank');
});
