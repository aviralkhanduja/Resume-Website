var tags=document.querySelectorAll('nav li a[href*="#"]');
console.log(tags);
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