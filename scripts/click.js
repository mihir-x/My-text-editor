document.getElementById('bold').addEventListener('click', function(){
    const textInArea = captureInput('textarea');
    // textInArea.style.fontWeight = 'bold';
    textInArea.classList.toggle('bold');
});
document.getElementById('italic').addEventListener('click', function(){
    // captureInput('textarea').style.fontStyle = 'italic';
    captureInput('textarea').classList.toggle('italic');
});
document.getElementById('uppercase').addEventListener('click', function(){
    // captureInput('textarea').value = captureInput('textarea').value.toUpperCase();
    captureInput('textarea').classList.toggle('uppercase');
});

document.getElementById('left').addEventListener('click', function(){
    captureInput('textarea').style.textAlign = 'left';
});
document.getElementById('center').addEventListener('click', function(){
    captureInput('textarea').style.textAlign = 'center';
});
document.getElementById('right').addEventListener('click', function(){
    captureInput('textarea').style.textAlign = 'right';
});
document.getElementById('justify').addEventListener('click', function(){
    captureInput('textarea').style.textAlign = 'justify';
});

document.getElementById('text-format').addEventListener('click', function(){
    const textString = captureInput('textarea').value;
    const splitText = textString.split('.');
    let newText = '';
    for(let i of splitText){
        const newI = makeFirstLetterCapital(i);
        newText = newText + newI +'. ';
    }
    captureInput('textarea').value = newText;
});
