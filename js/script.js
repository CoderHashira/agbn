document.addEventListener('DOMContentLoaded', () => {
    /* ===================================================
       1. OPPORTUNITIES CAROUSEL SLIDER
    =================================================== */
    const cards = document.getElementById("cards");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (cards) {
        // Calculate scroll step dynamically based on card width + gap
        const getScrollAmount = () => {
            const card = cards.querySelector(".card");
            if (!card) return 0;
            const style = window.getComputedStyle(cards);
            const gap = parseInt(style.gap || style.gridGap || 0, 10);
            return card.offsetWidth + gap;
        };

        // Next Button Click
        if (next) {
            next.addEventListener("click", () => {
                cards.scrollBy({
                    left: getScrollAmount(),
                    behavior: "smooth"
                });
            });
        }

        // Prev Button Click
        if (prev) {
            prev.addEventListener("click", () => {
                cards.scrollBy({
                    left: -getScrollAmount(),
                    behavior: "smooth"
                });
            });
        }

        // Auto-Scroll Interval
        setInterval(() => {
            const scrollAmount = getScrollAmount();
            if (scrollAmount === 0) return;

            // If at the end of the scroll container, loop back to start
            if (cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 5) {
                cards.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                cards.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        }, 4000);
    }

    /* ===================================================
       2. RSVP MODAL FUNCTIONALITY
    =================================================== */
    const rsvpBtn = document.getElementById('rsvp-btn');
    const rsvpModal = document.getElementById('rsvp-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Open Modal
    if (rsvpBtn && rsvpModal) {
        rsvpBtn.addEventListener('click', () => {
            rsvpModal.classList.add('active');
        });
    }

    // Close Modal helper function
    const closeModal = () => {
        if (rsvpModal) {
            rsvpModal.classList.remove('active');
        }
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    // Close Modal when clicking outside content box overlay
    window.addEventListener('click', (e) => {
        if (e.target === rsvpModal) {
            closeModal();
        }
    });
});