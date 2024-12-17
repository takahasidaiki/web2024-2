//function nazo76(){if(document.getElementById('answer76').value < '夢'){alert('はずれ')}else{alert('あたり！')};}
function nazo76() {
    var answer = document.getElementById('answer76').value;
    if (answer < '夢') {
        alert('はずれ');
    } else if (answer === '夢') {
        alert('あたり！');
    } else {
        alert('はずれ');
    }
}
