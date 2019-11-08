;(function(){
    var childNodeObj = [];
    var rowsHeightArr = [];
    var imgSource = data.imgData;
    window.ParentNode = function(selecter){
        this.selector = selecter;
        this.ele = document.getElementById(selecter);
    }
    ParentNode.prototype.init = function(classSelector){
        var nodeArr = this.getChildNodeByClassName(classSelector);
        childNodeObj = [];
        rowsHeightArr = [];
        for(var i = 0;i<nodeArr.length;i++){
            childNodeObj.push(new ChildNode(nodeArr[i]));
        }
    }

    ParentNode.prototype.imageLocation = function(classSelector){
        this.init(classSelector);
        var cells = this.getCells();
        this.style({
            width:childNodeObj[0].eleWidth*cells + "px",
            margin:"auto",
        });
        for(var i = 0;i<childNodeObj.length;i++){
            if (i<cells){
                rowsHeightArr[i] = childNodeObj[i].eleHeight;
            }else{
                var minIndex = findMinHeightIndex(rowsHeightArr);
                var minNode = childNodeObj[minIndex];
                var currentNodes = childNodeObj[i];
                currentNodes.style({
                    position:"absolute",
                    left:minNode.offsetLeft + "px",
                    top:rowsHeightArr[minIndex] + "px",
                })
                rowsHeightArr[minIndex] += currentNodes.eleHeight;
            }
        }
    }

    ParentNode.prototype.scrollAppend = function(selector,event){
        var maxHeight = findMaxHeight(rowsHeightArr);
        var pageHeight = document.documentElement.clientHeight;
        var scrollHeight = document.documentElement.scrollTop;
        if (maxHeight - 3<= parseInt(pageHeight + scrollHeight)) {
            for (var i in imgSource){
                var contentEle = createElement("div",{"class":"content"});
                var boxEle = createElement("div",{"class":"box"});
                var imgEle = createElement("img",{"src":"img/" + imgSource[i].src});
                var textEle = createElement("p");
                textEle.innerHTML = imgSource[i].src;
                boxEle.appendChild(imgEle);
                boxEle.appendChild(textEle);
                contentEle.appendChild(boxEle);
                this.ele.appendChild(contentEle);
            }
            this.imageLocation(selector)
        }
    }

    ParentNode.prototype.getCells = function(){
        var childWidth = childNodeObj[0].eleWidth;
        var cells = Math.floor(parseInt(document.documentElement.clientWidth) / childWidth);
        return cells;
    }

    ParentNode.prototype.getChildNodeByClassName = function(ClassName){
        ClassName = "." + ClassName;
        var nodeObj = getNodes(ClassName,this.ele);
        return nodeObj;
    }
    ParentNode.prototype.getChildNodeByTagName = function(TagName){
        var nodeObj = getNodes(TagName,this.ele);
        return nodeObj;
    }
    ParentNode.prototype.style = function(obj){
        style.call(this,obj);
    }
})();