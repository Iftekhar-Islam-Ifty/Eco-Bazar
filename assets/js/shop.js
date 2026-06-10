// =========================================================================
// SHOP PAGE — ফিল্টার টেমপ্লেট ক্লোন ও ইনিশিয়ালাইজেশন
// =========================================================================
document.addEventListener('DOMContentLoaded', function () {

    // sidebarFilters টেমপ্লেট থেকে ডেস্কটপ সাইডবার ও মোবাইল offcanvas-এ ক্লোন
    const filterTemplate = document.getElementById('sidebarFilters');
    const sidebarTarget = document.getElementById('shopSidebarFilters');
    const offcanvasTarget = document.getElementById('shopOffcanvasFilters');

    if (filterTemplate && sidebarTarget) {
        sidebarTarget.appendChild(filterTemplate.content.cloneNode(true));
    }

    if (filterTemplate && offcanvasTarget) {
        // offcanvas-এ আলাদা collapse ID দরকার — ডুপ্লিকেট ID এড়াতে
        const offcanvasClone = filterTemplate.content.cloneNode(true);
        offcanvasClone.querySelectorAll('[id]').forEach(function (el) {
            el.id = 'mobile-' + el.id;
        });
        offcanvasClone.querySelectorAll('[data-bs-target]').forEach(function (el) {
            const target = el.getAttribute('data-bs-target');
            if (target) {
                el.setAttribute('data-bs-target', '#mobile-' + target.slice(1));
            }
        });
        offcanvasTarget.appendChild(offcanvasClone);
    }

    // প্রাইস রেঞ্জ স্লাইডার ইনিশিয়ালাইজ (sidebar ও offcanvas উভয়)
    initPriceRangeSliders();

    // অ্যাক্টিভ ফিল্টার ব্যাজ রিমুভ
    initActiveFilterRemoval();

    // ট্যাগ পিল টগল
    initTagPills();
});


// =========================================================================
// SHOP PAGE — ডুয়াল প্রাইস রেঞ্জ স্লাইডার লজিক
// =========================================================================
function initPriceRangeSliders() {
    document.querySelectorAll('.price-range-wrapper').forEach(function (wrapper) {
        const minInput = wrapper.querySelector('.price-range-min');
        const maxInput = wrapper.querySelector('.price-range-max');
        const track = wrapper.querySelector('.price-range-track');
        const panel = wrapper.closest('.shop-filter-panel');
        const minLabel = panel ? panel.querySelector('[id*="priceMinLabel"]') : null;
        const maxLabel = panel ? panel.querySelector('[id*="priceMaxLabel"]') : null;

        if (!minInput || !maxInput) return;

        // স্লাইডার ট্র্যাক ভিজুয়াল আপডেট
        function updateTrack() {
            const min = parseInt(minInput.min, 10);
            const max = parseInt(minInput.max, 10);
            let minVal = parseInt(minInput.value, 10);
            let maxVal = parseInt(maxInput.value, 10);

            // min যেন max-এর বেশি না হয়
            if (minVal > maxVal - 5) {
                minVal = maxVal - 5;
                minInput.value = minVal;
            }

            const leftPercent = ((minVal - min) / (max - min)) * 100;
            const rightPercent = 100 - ((maxVal - min) / (max - min)) * 100;

            if (track) {
                track.style.setProperty('--range-left', leftPercent + '%');
                track.style.setProperty('--range-right', rightPercent + '%');
            }

            if (minLabel) minLabel.textContent = minVal;
            if (maxLabel) maxLabel.textContent = maxVal;
        }

        minInput.addEventListener('input', updateTrack);
        maxInput.addEventListener('input', updateTrack);
        updateTrack();
    });
}


// =========================================================================
// SHOP PAGE — অ্যাক্টিভ ফিল্টার ব্যাজ রিমুভ
// =========================================================================
function initActiveFilterRemoval() {
    document.querySelectorAll('.btn-close-filter').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const badge = btn.closest('.active-filter-badge');
            if (badge) {
                badge.style.opacity = '0';
                badge.style.transform = 'scale(0.9)';
                setTimeout(function () {
                    badge.remove();
                }, 200);
            }
        });
    });
}


// =========================================================================
// SHOP PAGE — পপুলার ট্যাগ পিল টগল
// =========================================================================
function initTagPills() {
    document.querySelectorAll('.tag-pill').forEach(function (pill) {
        pill.addEventListener('click', function (e) {
            e.preventDefault();
            pill.classList.toggle('active');
        });
    });
}
