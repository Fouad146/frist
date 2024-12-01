var inputBookname = document.getElementById("inputBookname")
var siteUrl = document.getElementById("siteUrl")
var alertBox =document.getElementById("alertBox")
var tableContent= document.getElementById("tableContent")
var Xalert= document.getElementById("Xalert")





var links =[];


// if(getLink()){
//     links = getLink();
//     console.log(11)
// }; 
// display()

function submet(){
    var link ={
        name : inputBookname.value,
        url : siteUrl.value
    }
    links.push(link)
    saveLink()
    display()
}

function display() {
    var cartona ="";
    for (var i = 0; i < links.length; i++) {
        cartona += `<tr>
                        <th>${links[i].name}</th>
                        <th>${links[i].url}</th>
                        <th>
                            <button class="btn btn-success"><i class="fa-regular fa-eye pe-2" onclick="visitLink(${i})"></i>Visit</button>
                        </th>
                        <th>
                            <button class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2" onclick="deleteLink(${i})"></i>Delete</button>
                        </th>
                    </tr>
`;
        
    }
    tableContent.innerHTML= cartona
}

function deleteLink(k){
links.splice(k ,1)
display()
}
function visiteLink(v){
// links.****(v ,1)
display()
}


function saveLink(){
    localStorage.setItem("links",JSON.stringify(links))
}
function getLink(){
    return JSON.parse(localStorage.getItem("links"))
}


function xAlert(){
    alertBox.classList.remove("d-flex")
    alertBox.classList.add("d-none")
    console.log(oooo);
    display()
}

