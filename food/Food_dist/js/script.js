window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
//скрывает табы неактивные
    function hideTabContent() {
        tabsContent.forEach( item =>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });

        tabs.forEach( item=>{
            item.classList.remove('tabheader__item_active');
        });
    
    }
//показывает активные табы 
    function showTabContent (i=0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
      
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);  
                }
            });
        }
    });

    //timer

    const deadline = '2023-02-11';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime)-Date.parse(new Date()),
            days = Math.floor(t/(1000*60*60*24)),
            hours = Math.floor((t/(1000*60*60) %24)),
            minutes = Math.floor((t/1000/60) %60),
            seconds = Math.floor((t/1000) %60);
            return{
                'total':t,
                'days':days,
                'hours':hours,
                'minutes':minutes,
                'seconds':seconds
                
            };

    }
    function setClock(selector, endtime){
        const timer = document.querySelector('.timer'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
            timeInterval = setInterval(updateClock,1000);
    
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML=t.days;
        hours.innerHTML=t.hours;
        minutes.innerHTML=t.minutes;
        seconds.innerHTML=t.seconds;

        if(t.total<=0){
            clearInterval(timeInterval);
        }

    }
    }

    setClock('.timer', deadline);
});