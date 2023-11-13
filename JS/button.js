const btnShowRightArea = document.querySelector('.btn-show-right-area');
const rightArea = document.querySelector('.right-area');

let isRightAreaVisible = false; // Ban đầu ẩn giao diện bên phải

btnShowRightArea.addEventListener('click', () => {
  if (isRightAreaVisible) {
    // Nếu đang hiển thị, ẩn nó đi
    rightArea.style.transform = 'translateX(100%)';
    rightArea.style.opacity = 0;
  } else {
    // Nếu đang ẩn, hiển thị nó
    rightArea.style.transform = 'translateX(0)';
    rightArea.style.opacity = 1;
  }
  
  // Cập nhật trạng thái hiển thị
  isRightAreaVisible = !isRightAreaVisible;
});