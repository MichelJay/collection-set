;(function(){
    const toggle = {
        pages:document.querySelector('.pages'),
        navbar:document.querySelector('.navbar'),
        openBar:document.querySelector('.open-navbar'),
        init(){
            this.openBar.addEventListener('click',(event)=>{
                this.pages.classList.toggle('translate-left');
                this.navbar.classList.toggle('translate-right')
                event.target.children[0].classList.toggle('rotateDown');
                event.target.children[1].classList.toggle('hidder');
                event.target.children[2].classList.toggle('rotateUp');
            },true);
        }
    }
    toggle.init();

    const typer = {
        typerNode:document.querySelector('.typer'),
        text1:'做一个响应式网站',
        text2:'让世界更好的了解您',
        init(){
            let textArr = [...this.text1,'<br>',...this.text2]
            let counter = 1;
            const interval = setInterval(()=>{
                if(counter < textArr.length+1){
                    let arrs = textArr.slice(0,counter)
                    this.typerNode.innerHTML = arrs.join('') +  '<b>|</b>';
                    counter++;
                }else{
                    clearInterval(interval)
                }
            },500)
        }
    }
    typer.init();

    
})();