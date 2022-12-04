let inputTxt = document.querySelector("#inputTxt");
let submitBtn = document.querySelector("#submitBtn");
const AlertDom = document.querySelector("#alert");
let todolist = document.querySelector("#todolist");


submitBtn.addEventListener("click", (event) => {

    if(inputTxt.value){
        createList(inputTxt.value);
        setAlertMsg("To Do List  " , "  Item was added the list", "success");
    }
    else{
        setAlertMsg("To Do List  " , "  You tried to submit without writing anything.");
    }


})



function setAlertMsg(title, msg, type = "warning"){

    AlertDom.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${title}</strong>${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}



function createList(item){

    let liDom = document.createElement('li');
    liDom.classList.add(`list-group-item`,`bg-green`);
    liDom.innerHTML = item;
  
    const btn = document.createElement('button');
    btn.classList.add("btn-close" , "close-button")
   
 
    btn.addEventListener("click", function() {
        this.parentElement.remove();
    });

    btn.addEventListener("mouseover", function() {
        
        this.parentElement.style.backgroundColor = "rgba(227, 102, 102, 0.432)";
       
    });

    btn.addEventListener("mouseout", function() {
        
        this.parentElement.style.backgroundColor = "";
       
    });

  

    liDom.appendChild(btn);

    todolist.append(liDom);

    inputTxt.value = "";

}
