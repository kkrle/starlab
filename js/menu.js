function containerOnClick(event){
    if (event.target.tagName == "A"){
        if (event.target.outerHTML.search(/href=\"#/)!=0) document.getElementById("TUDelftContainerOfLinks").className="navbar-collapse tudelft-hide";
    }
}

function menuIconOnClick(){
    if (document.getElementById("TUDelftContainerOfLinks").className == "navbar-collapse tudelft-show"){
        document.getElementById("TUDelftContainerOfLinks").className="navbar-collapse tudelft-hide";
    }
    else document.getElementById("TUDelftContainerOfLinks").className="navbar-collapse tudelft-show";
}