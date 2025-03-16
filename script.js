//! Chặn menu chuột phải
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

//! Chặn tổ hợp phím Ctrl+C (sao chép), Ctrl+X (cắt), Ctrl+V (dán)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
        e.preventDefault();
    }
});

//! Chặn sự kiện chọn văn bản
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});

// //! Chặn chọn văn bản khi kéo chuột
// document.addEventListener("mousedown", function (e) {
//     e.preventDefault();
// });

//? Thay đổi link ở đây
const link = "https://www.facebook.com/thuan.ta.1805"; // Đường dẫn mà bạn muốn chuyển tới

document.getElementById('marq').onclick = function() {
    window.location.href = link; // Chuyển hướng đến đường dẫn đã chỉ định
};

//? Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    const sliderWidth = document.querySelector('#hero-slider').clientWidth;
    document.querySelector('.slider-container').style.transform = `translateX(-${sliderWidth * index}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Adjust the slider on window resize
window.addEventListener('resize', () => showSlide(currentSlide));



// Lấy tất cả các phần tử hình ảnh
const products = document.querySelectorAll('.pro img');
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeModal = document.querySelector(".close");

// Lắng nghe sự kiện click vào từng ảnh sản phẩm
products.forEach((product, index) => {
    product.addEventListener('click', function() {
        const productDiv = product.closest('.pro');
        const productTitle = productDiv.querySelector('h5').innerText;
        const productPrice = productDiv.querySelector('h4').innerText;
        
        // Cập nhật nội dung modal
        modalImg.src = product.src;
        modalTitle.innerText = productTitle;
        modalPrice.innerText = productPrice;

        // Hiển thị modal
        modal.style.display = "block";
    });
});

// Đóng modal khi nhấn vào dấu x
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});