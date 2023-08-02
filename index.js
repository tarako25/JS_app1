const input = document.getElementById('input');
const coment = document.getElementById('coment');

//乱数取得
const random = Math.floor(Math.random() * 101);
console.log(random);
let count = 0;
function Confirm(){
    const inputValue = parseInt(input.value, 10);

    //validation
    if(isNaN(inputValue) || !Number.isInteger(inputValue)){
        coment.textContent = '数値を入力してください';
    }else{
        if(inputValue == random){
            alert(random +'で正解です!');
            coment.textContent = '';
            count = 0;
        }else{
            count++;
            if(count < 10){
                if(inputValue > random){
                    coment.textContent = count + '回目' + '入力された数値より小さいです';
                }else{
                    coment.textContent = count + '回目' + '入力された数値より大きいです';
                }
            }else{
                alert('失敗です..' + ' ' + '答えは' + random + 'でした!');
                coment.textContent = '';
                count = 0;
            }
        }
    }
    input.value = '';
}
