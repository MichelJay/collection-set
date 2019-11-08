window.onload = function(){
        var arrs = imageLocation();
        // var loading = insertLoadImage();
        window.onscroll = function(e){
            insertElement(arrs,loading);
            arrs = imageLocation();
        }
}
function insertLoadImage(){
    var loading = document.createElement("img");
    loading.setAttribute("src","load.jpg");
    loading.style.position = "fixed";
    loading.style.bottom = "5px";
    loading.style.left = "50%";
    loading.style.width = "50px";
    loading.style.height = "50px";
    loading.style.transform = "transform: translateX(50%);";
    loading.style.display = "none";
    document.body.appendChild(loading);
    return loading;
}

function insertElement(arrs){
    var maxHeight = findMaxHeight(arrs);
    var scrollTop = parseInt(document.documentElement.scrollTop);
    var pageHeight = parseInt(document.documentElement.clientHeight);
    console.log(maxHeight + ":" + parseInt(scrollTop + pageHeight))
    console.log(maxHeight<=scrollTop + pageHeight)
    if (parseInt(maxHeight-10) <= parseInt(scrollTop + pageHeight)){
        for (var i = 0;i<data.imgData.length;i++){
            var contentElement = document.createElement("div");
            contentElement.className = "content";
            var img = document.createElement("img");
            img.setAttribute("src","img/" + data.imgData[i].src);
            var p = document.createElement("p");
            p.innerHTML =  data.imgData[i].src;
            contentElement.appendChild(img);
            contentElement.appendChild(p);
            container.appendChild(contentElement);
            }
    }
}

function imageLocation(){
    var container = document.getElementById("container");
    var nodes = container.getElementsByClassName("content");
    var imageWidth = parseInt(window.getComputedStyle(nodes[0],null).width);
    var cells = Math.floor(parseInt(document.documentElement.clientWidth) / imageWidth);
    container.style.width = cells*imageWidth + "px";
    container.style.margin = "auto";
    var heightArr = getImagesHeight(nodes);
    var con  = [];
    for(var i = 0;i<heightArr.length;i++){
        if (i<cells){
            con.push(heightArr[i]);
        }else{
            var minHeightIndex = findMinHeightIndex(con);
            var minElementLeft = nodes[minHeightIndex].offsetLeft;
            var currentNode = nodes[i];
            currentNode.style.position = "absolute";
            currentNode.style.left = minElementLeft + "px";
            currentNode.style.top = con[minHeightIndex] + "px";
            con[minHeightIndex] += parseInt(window.getComputedStyle(currentNode,null).height);
        }
    }
    return con;
}
