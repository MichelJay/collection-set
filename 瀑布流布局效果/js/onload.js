window.onload = function(){
    var container = new ParentNode("container");
    container.imageLocation("content");
    window.onscroll = function(e){
        container.scrollAppend("content",e);
    }
    var content = document.getElementsByClassName("content")[0];
    console.log(new ChildNode(document.getElementsByClassName("content")[0]));
    console.log(window.getComputedStyle(content,null).width)
    console.log(window.getComputedStyle(content,null).height)
}