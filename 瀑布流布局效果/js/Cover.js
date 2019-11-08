;(function(){
    window.Cover = function(){
        this.cover = document.getElementById("cover");
        this.cover.style.top = document.documentElement.scrollTop + "px";
        var close = this.cover.getElementsByClassName("close")[0];
        var that = this;
        close.onclick = function(){
            that.close();
        }
        console.log(this.cover)
    }
    Cover.prototype.open = function(){
        this.cover.style.display = "block";
    }
    Cover.prototype.close = function(){
        this.cover.style.display = "none";
    }
    Cover.prototype.setImagePath = function(path){
        var img = this.cover.getElementsByTagName("img")[0];
        img.setAttribute("src",path);
    }

})();