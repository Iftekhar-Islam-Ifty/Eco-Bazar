// =========================================================================
// ABOUT PAGE — টিম স্লাইডার হরাইজন্টাল স্ক্রল নেভিগেশন
// =========================================================================
document.addEventListener('DOMContentLoaded', function () {
    const teamScroll = document.querySelector('.about-team-scroll');
    const teamGrid = document.querySelector('.about-team-grid');
    const prevBtn = document.querySelector('.about-team-prev');
    const nextBtn = document.querySelector('.about-team-next');

    if (!teamScroll || !teamGrid || !prevBtn || !nextBtn) return;

    // প্রতি ক্লিকে এক কার্ড পরিমাণ স্ক্রল
    function getScrollAmount() {
        const firstCol = teamGrid.querySelector('.col');
        return firstCol ? firstCol.offsetWidth + 24 : 280;
    }

    prevBtn.addEventListener('click', function () {
        teamScroll.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        teamScroll.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });
});
