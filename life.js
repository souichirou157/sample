'use strict'

console.log('lifegame');

const array = [[],[],[],[],[]];
const Deth = document.querySelector('.DethLifes');
const Born = document.querySelector('.bornLifes');
const colors = ['.DethLifes','.bornLifes'];

const start = document.createElement('input');
start.type = 'submit';
start.id = 'switch';
start.value  = 'START';
start.style.width ='width 70px';
start.style.height = 'height 30px';
start.style.cursor = 'pointer';
document.querySelector('body').appendChild(start);


//スタート押したらランダムに配色してそこから条件で色を変えていく
//イベントブロック内で処理すればnodedefined防げる
let td ;
let tr;

class RGB{
    constructor(red,green,blue,R,G,B){
         this.red = red;
         this.green = green;
         this.blue = blue;
         this.R = 255;
         this.G = 255;
         this.B = 255;
    }

    init_Color(){
        this.red = Math.floor(Math.random(Math.random()*this.R));
        this.green = Math.floor(Math.floor(Math.random()*this.G));
        this.blue = Math.floor(Math.floor(Math.random()*this.B));
        document.querySelector('#table').style.background= `rgb(${this.red},${this.green},${this.blue})`;
    }

    BackGround_Init_Color(){
        this.red = Math.floor(Math.random(Math.random()*this.R));
        this.green = Math.floor(Math.floor(Math.random()*this.G));
        this.blue = Math.floor(Math.floor(Math.random()*this.B));
        document.querySelector('body').style.background= `rgb(${this.red},${this.green},${this.blue})`;  
    };

}

let Life = new RGB(180,220,200);
let Elements = new RGB(160,200,230);



function makeLife(){
    for(let i=0;i < 5;i++){
        tr = document.createElement('tr');
        tr.class = 'row';
        for(let j =0 ; j < 5;j++){
            td = document.createElement('td');
            td.textContent = array[i][j];
            td.classList.add(`column${i}`) ;
            td.style.width= '30px';
            td.style.height = '30px';
            tr.appendChild(td);
    
        }
        document.querySelector('#table').style.style = `margin-bottom 32px`;
       document.querySelector('#table').appendChild(tr);
    }  
}






start.addEventListener('click',()=>{
    makeLife();
   setInterval(()=> Life.init_Color(),100);
});
setInterval(() => Elements.BackGround_Init_Color(),200);





