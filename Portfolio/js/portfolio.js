
// ——————————————————————————————————————————————————
// modal nav
// ——————————————————————————————————————————————————
function showDiv(div) {
  var x = document.getElementById(div);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ——————————————————————————————————————————————————
// scroll down button
// ——————————————————————————————————————————————————

$(function() {
  $("a[href*='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// ——————————————————————————————————————————————————
// back to top button
// ——————————————————————————————————————————————————

topButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var w = parseInt(window.innerWidth);
  if (w >= 500 && (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// resize window
 // if window resize call responsive function
 $(window).resize(function(e) {
  scrollFunction();
});
// auto fire the responsive function so that it will adjust to specific/suitable function
    $(document).ready(function(e) {
      scrollFunction();
  });

// Fill color competences

const elements = Array.from(document.querySelectorAll('.fill'));
function fill(item, index) {
  const bgColor = getComputedStyle(item).backgroundColor,
  fillLayer = document.createElement('div');
  fillLayer.classList.add('fill-layer');
  item.style.backgroundColor = 'transparent';
  item.style.position = 'relative';
  item.style.overflow = 'hidden';
  setTimeout(function() {
  fillLayer.style.backgroundColor = bgColor;  
  item.appendChild(fillLayer);}, index * 500); 
};
function unfill(item) {
  document.querySelectorAll(".fill-layer").forEach(el => el.remove());
  item.style.backgroundColor = '';
  item.style.position = '';
  item.style.overflow = '';
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elements.forEach(fill);
    }
  })
  });

observer.observe(document.querySelector('.sphere'));





