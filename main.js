// script.js

document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // Ativa o botão da aba clicada e desativa os outros
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Mostra o conteúdo da aba correspondente e esconde os outros
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });
});
