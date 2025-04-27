let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

    // Reset slideIndex if it exceeds the number of slides
    if (n > slides.length) { 
        slideIndex = 1; 
    }

    // Reset slideIndex if it is less than 1
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and add "active" class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Increment slideIndex and loop back to the first slide if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Automatically move to the next slide after 3 seconds
    setTimeout(() => showSlides(slideIndex), 3000);
}