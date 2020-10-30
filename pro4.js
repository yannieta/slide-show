const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slides = document.querySelectorAll(".Slide");
let n = 0; // so thu tu cua trang dau tien
slideShow(n); // hien thi trang dau tien dau
// set su kien cho  nut next
next.addEventListener("click", function() {
    n++;

    if (n > slides.length - 1) { // toi trang cuoi cung se tro ve trang dau tien
        n = 0;
    }
    slideShow(n);
});

prev.addEventListener("click", function() {
    n--;

    if (n < 0) { // toi trang dau tien se ve trang cuoi cung
        n = slides.length - 1;
    }
    slideShow(n);
});

function slideShow(n) {
    for (let i = 0; i < slides.length; i++) {
        if (i == n) { //lap qua toan bo hinh anh neu index tuong ung voi n  se them class active duoc set opacity 1
            slides[i].classList.add("active");
        } else {
            slides[i].classList.remove("active"); // ngoai ra se la thuoc tinh mac dinh opacity 0
        }
    }
}