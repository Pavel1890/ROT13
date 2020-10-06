// Создаем переменную поля ввода
let textInput = document.querySelector('#input_field_text'); 
// Создаем переменную поля вывода шифра
let out = document.querySelector('#input_field_rot13'); 

// Создаем функцию шифрования методом rot13
function rot13(str) { 
        var re = new RegExp("[a-z]", "i");
        var min = 'A'.charCodeAt(0);
        var max = 'Z'.charCodeAt(0);
        var factor = 13;
        var result = "";
        str = str.toUpperCase();
        
        for (var i=0; i<str.length; i++) {
          result += (re.test(str[i]) ?
            String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
        }
        
        return result;
      }

/* Создаем функцию обработки введенного текста в шифр и 
выводим его в поле вывода шифра*/
document.querySelector('#btnPush').onclick = () => {
        let str = textInput.value;
        out.innerHTML = rot13(str);
}

// создаем кнопку опустошения поля ввода
let btnReboot = document.getElementById("btnReboot");
btnReboot.onclick = function () {
  document.location.reload();
};