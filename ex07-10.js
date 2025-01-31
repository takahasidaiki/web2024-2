function BMI2(){var x = Number(document.getElementById('bmi3').value);
              var y = Number(document.getElementById('bmi4').value);
               var bmi2 = (x * 10000) / (y * y);
                var result;

                if (bmi2 < 18.5) {
        result = "低体重";
    } else if (bmi2 >= 18.5 && bmi2 < 25) {
        result = "普通";
    } else {
        result = "肥満";
    }
              alert("BMI: " + bmi2 + " = " + result);}
