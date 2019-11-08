;(function(){
    window.ChildNode = function(node){
        this.ele = node;
        this.eleWidth = parseInt(this.getNodeStyle("width"));
        this.eleHeight = parseInt(this.getNodeStyle("height"));
        console.log(this.eleWidth)
        this.offsetLeft = node.offsetLeft;
    }
    ChildNode.prototype.getNodeStyle = function(StyleName){
        var styles = window.getComputedStyle(this.ele,null);
        return styles[StyleName];
    }
    ChildNode.prototype.style = function(obj){
        style.call(this,obj);
    }
})();