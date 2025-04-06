<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3R6S82C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script> 
  (function () {
    var deadline = '2025/03/25 09:30'; // Set the target date

    function pad(num, size) {
      return String(num).padStart(size, '0'); // Ensure numbers are always 2-digit
    }

    function parseDate(date) {
      const parsed = Date.parse(date);
      if (!isNaN(parsed)) return parsed;
      return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
    }

    function getTimeRemaining(endtime) {
      let total = parseDate(endtime) - Date.parse(new Date());
      let seconds = Math.floor((total / 1000) % 60);
      let minutes = Math.floor((total / 1000 / 60) % 60);
      let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      let days = Math.floor(total / (1000 * 60 * 60 * 24));

      return { total, days, hours, minutes, seconds };
    }

    function startCountdown(countdownElement, endtime) {
      let days = countdownElement.querySelector("[data-days]");
      let hours = countdownElement.querySelector("[data-hours]");
      let minutes = countdownElement.querySelector("[data-minutes]");
      let seconds = countdownElement.querySelector("[data-seconds]");
      let expiredMessage = countdownElement.querySelector("[data-expired-message]");

      // ✅ Manually find elements by their text content (for dots and texts)
      let allElements = countdownElement.querySelectorAll("*");

      let dots = [];
      let texts = [];

      allElements.forEach(element => {
        if (element.textContent.trim() === ":") {
          dots.push(element); // ✅ Dots (":" separators)
        }
        if (element.textContent.trim().match(/Months|Days|Hours|Minutes|Seconds/)) {
          texts.push(element); // ✅ Text labels (Months, Days, etc.)
        }
      });

      console.log("Found dots:", dots.length, "Found texts:", texts.length);

      var timeinterval = setInterval(function () {
        var time = getTimeRemaining(endtime);

        if (time.total <= 0) {
          clearInterval(timeinterval);
          
          // ✅ Hide countdown numbers
          if (days) days.style.opacity = "0";
          if (hours) hours.style.opacity = "0";
          if (minutes) minutes.style.opacity = "0";
          if (seconds) seconds.style.opacity = "0";

          // ✅ Hide detected dots and text labels
          dots.forEach(dot => dot.style.opacity = "0");
          texts.forEach(text => text.style.opacity = "0");

          if (expiredMessage) {
            console.log("Expired message found. Displaying it now.");
            expiredMessage.style.opacity = "1"; // ✅ Show event started message
          } else {
            console.error("No [data-expired-message] found inside this countdown wrapper.");
          }

        } else {
          days.textContent = pad(time.days, 2);
          hours.textContent = pad(time.hours, 2);
          minutes.textContent = pad(time.minutes, 2);
          seconds.textContent = pad(time.seconds, 2);
        }
      }, 1000);
    }

    document.querySelectorAll("[data-countdown]").forEach(countdown => {
      let countdownTime = countdown.getAttribute("data-deadline") || deadline;
      startCountdown(countdown, countdownTime);
    });

  })();
</script>




<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.23/bundled/lenis.min.js"></script> 
<script>
let lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.9,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});
</script>


<script>
document.addEventListener("DOMContentLoaded", function () {
    // Wait for the page to fully load
    setTimeout(() => {
        // Get the 'tab' parameter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const tabToOpen = urlParams.get("tab");

        if (tabToOpen) {
            // Find the tab link using its ID
            const tabLink = document.getElementById(tabToOpen);

            if (tabLink) {
                tabLink.click(); // Simulate a click to activate the tab

                // Jump directly to the tab section without scrolling animation
                window.location.hash = "affiliate_tabs";
            }
        }
    }, 500); // Ensures the page fully loads before execution
});
</script>

