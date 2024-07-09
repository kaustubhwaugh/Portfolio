document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let level = bar.getAttribute("data-level");
        let width;

        switch (level) {
            case "Beginner":
                width = "33%";
                break;
            case "Intermediate":
                width = "60%";
                break;
            case "Advanced":
                width = "100%";
                break;
            default:
                width = "0";
        }

        bar.style.width = width;
    });
});

