// Onclick events for navigator bar
function toggleActiveNavigator(element) {
    if (element) {
        const navigator_actives = Array.from(
            document.getElementsByClassName("navigator_active")
        );
        if (navigator_actives.length > 0) {
            navigator_actives.forEach((e) => {
                e.classList.remove("navigator_active");
            });
        }

        element
            .querySelector(".navigator_icon")
            .classList.add("navigator_active");
    }
}

// Calculate visible area of element
function calculateVisibleArea(rect) {
    var windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    var visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight * rect.width;
}

// Scroll the active dot into view if not fully visible
function scrollToActiveDot() {
    const activeDot = document.querySelector(
        ".navigator_icon.navigator_active"
    );
    if (activeDot) {
        activeDot.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

// Handle scroll
function handleScroll() {
    scrollToActiveDot();

    var boxes = document.querySelectorAll(".section_container");
    var navHome = document.getElementById("nav_home");

    if (Array.from(boxes).length > 0) {
        var elementsToCheck = Array.from(boxes).concat(navHome);
        var largestVisibleArea = 0;
        var mostProminentBox = null;

        elementsToCheck.forEach(function (element) {
            var rect = element.getBoundingClientRect();
            var visibleArea = calculateVisibleArea(rect);

            if (window.scrollY === 0) {
                toggleActiveNavigator(
                    document.getElementById(navHome.id + "-b")
                );
            }
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight
            ) {
                toggleActiveNavigator(
                    document.getElementById(
                        elementsToCheck[elementsToCheck.length - 2].id + "-b"
                    )
                );
            } else {
                if (visibleArea > largestVisibleArea) {
                    largestVisibleArea = visibleArea;
                    mostProminentBox = element;
                    toggleActiveNavigator(
                        document.getElementById(element.id + "-b")
                    );
                }
            }
        });
    }
}

// Intersection Observer configuration
var options = {
    rootMargin: "-50px 0px", // Trigger when 100px or less in view
    threshold: 0.1, // Adjust this threshold based on your needs
};

// Callback function when an observed element enters or exits the viewport
function handleIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("effect_active");
        } else {
            entry.target.classList.remove("effect_active");
        }
    });
}

// Create the Intersection Observer instance
var observer = new IntersectionObserver(handleIntersect, options);

// Get all elements with the class "fade-in"
var fadeinElements = document.querySelectorAll(".effect_fade-in");

// Observe each fade-in element
fadeinElements.forEach((element) => {
    observer.observe(element);
});

// Initial check
handleScroll();

// Event Listener
window.addEventListener("DOMContentLoaded", function () {
    fadeinElements.forEach((element) => {
        element.classList.add("effect_fade-in");
    });

    var links = document.querySelectorAll("a.link");
    links.forEach(function (link) {
        link.setAttribute("target", "_blank");
    });
});
window.addEventListener("scroll", handleScroll);
