const containerEl=document.getElementById('container');
const cards_length=16;
const cards =[];

let previousShownCard=undefined;


let icons=[
    'book',
    'bus',
    'sun',
    'home',
    'mouse',
    'game',
    'laptop',
    'printer',
]
//copy the icons again
icons.push(...icons);

for(i=0; i<100; i++){
    const idx1=Math.floor(Math.random()*icons.length);
    const idx2=Math.floor(Math.random()*icons.length);
    const temp=icons[idx1];
    icons[idx1]=icons[idx2];
    icons[idx2]=temp
}


for(i=0; i<cards_length; i++){
    const cardEl=document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML=`
    <div class='front' id='front'>
        <i class='bx bx-${icons[i]}'></i>
    </div>
    <div class='back'><small>Click me</small></div>
    `
    cardEl.addEventListener('click', ()=>{
        if (!cardEl.classList.contains('show')){
            cardEl.classList.add('show')
        }

        if(!previousShownCard){
            previousShownCard = cardEl;
        }
        else{
            const iconOne=previousShownCard.querySelector('i').classList[1];
            const iconTwo=cardEl.querySelector('i').classList[1];
            if(iconOne!==iconTwo){
                const temp=previousShownCard;
                setTimeout(()=>{
                    temp.classList.remove('show');
                    cardEl.classList.remove('show');
                }, 1000)
            }
            
            else{
                const temp=previousShownCard;
                setTimeout(() => {
                    temp.classList.add('remove');
                    cardEl.classList.add('remove'); 
                }, 2000);
            }
            previousShownCard=undefined;
        }   
    })
    cards.push(cardEl);
    containerEl.appendChild(cardEl)
}

