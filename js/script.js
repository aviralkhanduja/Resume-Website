var tags=document.querySelectorAll('nav li a[href*="#"]');
//console.log(tags);
for(var i=0;i<tags.length;i++){
    tags[i].addEventListener('click',function(event){
        event.preventDefault();
        var section=this.getAttribute('href');
        var element=document.getElementById(section.substring(1));
        var lower_limit=10;
        if(section.substring(1)=='contact')
            lower_limit=250;
        const id=setInterval(move,12);
        function move(){
            var coordinates=element.getBoundingClientRect();
            if(coordinates.top<=lower_limit){
                clearInterval(id);
            }
            window.scrollBy(0,50);
        }
    });
}
var skill_levels=document.querySelectorAll('.skill-container div');
var check_filling=[];
for(var i=0;i<skill_levels.length;i++)
{
    check_filling.push(false);
}
window.addEventListener('scroll',checkscroll);
function checkscroll()
{
    for(let i=0;i<skill_levels.length;i++)
    {
        let coordinates=skill_levels[i].getBoundingClientRect();
        //console.log(coordinates);
        if(!check_filling[i]&&coordinates.top<=window.innerHeight&&coordinates.top>=-40)
        {
            fillbar(skill_levels[i]);
            check_filling[i]=true;
        }
        if(coordinates.top<-40||coordinates.top>window.innerHeight)
        {
            check_filling[i]=false;   
        }
    }   
}
function fillbar(skill_level)
{
    let value=skill_level.getAttribute('data-width');
    let currentWidth=0;
    const id=setInterval(function(){
        //console.log(skill_levels[i].style.width);
        if(currentWidth>=value)
        {
            clearInterval(id);
            return;
        }
        currentWidth++;
        skill_level.style.width=currentWidth+"%";
        //console.log(skill_levels[i].style.width);
    },4);
}

