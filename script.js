document.querySelectorAll('.box').forEach(box => {
    box.addEventListener("click", function () {
        let boxPara = this.parentElement.querySelector('.box-para');
        // Toggle class to show/hide
        boxPara.classList.toggle('hidden');
    });
});
