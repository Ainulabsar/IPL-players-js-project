console.log('This is drag and drop utility');
let dragBox = document.querySelector('.draggable');
const teamNames = document.getElementsByClassName('teamName');
let Rupee1 = document.getElementById("Rs1");
let Rupee2 = document.getElementById("Rs2");
let r1 = 10000;
// console.log(draggable);
console.log(teamNames);
dragBox.addEventListener ('dragstart', (e)=>{
    console.log('DragStart had been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';   
        
    }, 0);
    
});
dragBox.addEventListener ('dragend', (e)=>{
    console.log('DragEnd had been triggered');
    e.target.className = 'draggable';
});

for (teamName of teamNames){
    teamName.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('DragOver had been triggered');

    });
    teamName.addEventListener('dragenter', ()=>{
        console.log('DragEnter had been triggered');

    });
    teamName.addEventListener('dragleave', ()=>{
        console.log('DragLeave had been triggered');
        Rupee1.textContent -= r1;
        // Rupee2.textContent -= r1;    

    });
    teamName.addEventListener('drop', (e)=>{
        console.log('Drop had been triggered');
        e.target.append(dragBox);

    });
}