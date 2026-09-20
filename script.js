const workItems = document.querySelectorAll('.work');
let currentIndex = 0;

function showWork(index) {
    workItems.forEach((item, i) => {
      item.classList.toggle('active', i === index)
    });
}
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % workItems.length;
    showWork(currentIndex);
});
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + workItems.length) % workItems.length;
showWork(currentIndex);
});