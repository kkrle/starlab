function show(query){
    var publications = document.querySelectorAll(".tudelft-publication");
    if (query) query = "-"+query;
    for (let index = 0; index < publications.length; index++) {
        const element = publications[index];
        console.log(element.classList,"tudelft-publication"+query)
        if (element.classList.contains("tudelft-publication"+query)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    }
}
function filter(category){
    var button = document.getElementById("filter-"+category);
    console.log(button)
    if (button.classList.contains("btn-primary")){
        button.className = "btn btn-outline-primary";
        show("");
    }
    else{
        buttons = document.getElementById("filters").querySelectorAll("button");
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].className = "btn btn-outline-primary";;
        }
        button.className = "btn btn-primary";
        show(category)
    }
}