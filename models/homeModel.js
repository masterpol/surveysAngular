Home.service("homeModel", function(){

    this.getMenu = function(){
        return [
            {
                id : 0,
                value : "home",
                link : "/home"
            },
            {
                id : 1,
                value : "about",
                link : "/about"
            }
        ]
    }

});