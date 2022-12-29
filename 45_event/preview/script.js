const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('click')
// }

// btn.addEventListener('click', ()=>{
//     alert('click');
// });

// btn.addEventListener('click', (e)=>{
//     e.targer.remove();
   
// });
let i = 0;
const deleteElement = (e) =>
{
   console.log(e.target);
   i++;
   if(i==1){
    btn.removeEventListener('click', deleteElement);
   }
};



btn.addEventListener('click', deleteElement);
