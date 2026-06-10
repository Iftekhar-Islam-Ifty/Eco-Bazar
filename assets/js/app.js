// =========================================================================
// SALE OF THE MONTH - COUNTDOWN TIMER (কাউন্টডাউন টাইমার ফাংশন)
// =========================================================================

// অফার শেষ হওয়ার একটি ডামি ডেট সেট করুন (যেমন ৩০ দিন পর)
const countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

const timerFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // দিন, ঘণ্টা, মিনিট এবং সেকেন্ড হিসেব করার ফর্মুলা
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML এলিমেন্টে ডেটা পুশ করা (যদি আইডিগুলো পেজে এক্সিস্ট করে)
    if(document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // টাইম শেষ হয়ে গেলে যা দেখাবে
    if (distance < 0) {
        clearInterval(timerFunction);
        document.getElementById("countdown-timer").innerHTML = "<b class='text-danger'>EXPIRED</b>";
    }
}, 1000);


// =========================================================================
// HOT DEALS COUNTDOWN TIMER
// =========================================================================
function startHotDealsTimer() {
    // অফার শেষ হওয়ার একটি নির্দিষ্ট ডেট এবং টাইম সেট করুন (যেমন: এখন থেকে ৩ দিন পর)
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); 

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            clearInterval(timerInterval);
            return;
        }

        // দিন, ঘণ্টা, মিনিট ও সেকেন্ড হিসেব করার ফর্মুলা
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // HTML-এ ডেটা পুশ করা (যদি সংখ্যা ১ ডিজিটের হয় তবে সামনে ০ বসাবে)
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("mins").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("secs").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // প্রতি সেকেন্ডে টাইমার আপডেট হবে
    updateTimer(); 
    const timerInterval = setInterval(updateTimer, 1000);
}

// পেজ লোড হওয়া মাত্রই টাইমার চালু হবে
document.addEventListener("DOMContentLoaded", startHotDealsTimer);