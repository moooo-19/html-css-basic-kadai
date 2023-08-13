const btn = document.getElementById('btn');
const textList = document.getElementById('text-list')

btn.addEventListener('click',() => {
    const childList = document.createElement('h2');
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    },2000)
})