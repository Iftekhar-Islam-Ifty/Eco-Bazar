/* =========================================================================
   CONTACT PAGE — ফর্ম সাবমিশন হ্যান্ডলার
   কন্টাক্ট ফর্মের ভ্যালিডেশন ও সাবমিট ফিডব্যাক পরিচালনা করে
   ========================================================================= */

(function () {
    'use strict';

    var form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // ফর্মের সকল ইনপুট চেক করা
        var inputs = form.querySelectorAll('input[required], textarea[required]');
        var isValid = true;

        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (!isValid) return;

        // সফল সাবমিশন ফিডব্যাক দেওয়া
        var btn = form.querySelector('.contact-submit-btn');
        var originalText = btn.textContent;

        btn.textContent = 'Message Sent!';
        btn.disabled = true;
        btn.style.backgroundColor = 'var(--branding-success-dark)';

        // ৩ সেকেন্ড পর বাটন রিসেট করা
        setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
            form.reset();
            form.querySelectorAll('.is-invalid').forEach(function (el) {
                el.classList.remove('is-invalid');
            });
        }, 3000);
    });

    // ইনপুট পরিবর্তনে invalid ক্লাস সরিয়ে দেওয়া
    form.querySelectorAll('input, textarea').forEach(function (input) {
        input.addEventListener('input', function () {
            if (this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });

})();
