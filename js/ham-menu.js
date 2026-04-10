const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.menu-ul');
const navbarLinks = document.querySelectorAll('.menu-ul li a'); // เลือกลิงก์ทั้งหมด

// toggle เปิด/ปิด hamburger
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// เมื่อคลิกลิงก์ใด ๆ ให้ปิด menu และ toggle ทันที
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarToggle.classList.remove('active'); // ปิด hamburger
    navbarMenu.classList.remove('active');   // ปิด menu
  });
});