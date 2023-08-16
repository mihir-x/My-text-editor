const size = parseInt(captureInput('font-size').value);
console.log(size);
const text = captureInput('textarea');
text.style.fontSize = `${size}px`;
const colorOriginal = captureInput('color').value;
text.style.color = colorOriginal;
document.getElementById('font-size').addEventListener('input', function(){
    const sizeNew = parseInt(captureInput('font-size').value);
    text.style.fontSize = `${sizeNew}px`;
});

document.getElementById('color').addEventListener('input', function(){
    const colorNew = captureInput('color').value;
    text.style.color = colorNew;
})