function chackLeapYear(){
  const year = document.getElementById('year').value;
            let result = '';

            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                result = `${year}年は閏年です。`;
            } else {
                result = `${year}年は平年です。`;
            }

            document.getElementById('result').innerText = result;
}
