function show(query){
    //show all years
    var years = document.querySelectorAll(".tudelft-year");
    for (let index = 0; index < years.length; index++) {
        const element = years[index];
        element.style.display = "block";
    }

    var publications = document.querySelectorAll(".tudelft-publication");
    //if show("other") was called, display only the publications which do not have any category.
    if (query == "other"){
        for (let index = 0; index < publications.length; index++) {
            const element = publications[index];
            if (element.className == "tudelft-publication"){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
        }
    }
    else{
        if (query) query = "-"+query;
        for (let index = 0; index < publications.length; index++) {
            const element = publications[index];
            if (element.classList.contains("tudelft-publication"+query)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
        }
    }
    

    //hide years in which all publications are hidden
    for (let index = 0; index < years.length; index++) {
        const element = years[index];
        var publicationsinYear = element.querySelectorAll(".tudelft-publication");
        var empty = true;
        for (let index = 0; index < publicationsinYear.length; index++) {
            const onePublication = publicationsinYear[index];
            if (onePublication.style.display!="none") {
                empty = false;
                break;
            }
        }
        if (empty) element.style.display="none";
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