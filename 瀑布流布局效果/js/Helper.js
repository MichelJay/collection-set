//找到最小节点的索引
function findMinHeightIndex(arr){
    var index = 0;
    var min = arr[index];
    for(var i = 1;i<arr.length;i++){
        if (arr[i]< min){
            min = arr[i];
            index = i;
        }
    }
    return index;
}

//找到对应图片高度
function getImagesHeight(nodes){
    var arr = [];
    for(var i = 0;i<nodes.length;i++){
        var ele = window.getComputedStyle(nodes[i],null);
        arr.push(parseInt(ele.height));
    }
    console.log(arr)
    return arr;
}

function findMaxHeight(arrs){
    var max = arrs[0];
    for(var i = 1;i<arrs.length;i++){
        if (arrs[i] > max){
            max = arrs[i];
        }
    }
    return max;
}

function getNodes(selector,parent = document){
    if(selector.startsWith(".")){
        return parent.getElementsByClassName(selector.substring(1));
    }else{
        return parent.getElementsByTagName(selector);
    }
}


function style(obj){
    if (obj == undefined)
        return;
    for(var i in obj){
        this.ele.style[i] = obj[i];
    }
}
// <div class="content">
//     <div class="box">
//     <img src="img/10.jpg">
//     <p>img10</p>
//     </div>
//     </div>


function createElement(tag,attribute){
    var element = document.createElement(tag);
    for(var i in attribute){
        element.setAttribute(i,attribute[i]);
    }
    return element;
}
