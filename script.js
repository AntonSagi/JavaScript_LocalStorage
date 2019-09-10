
window.onload = function(){
    if(localStorage.length > 0) {
            var myName = document.createElement("div");
            var rfrDel = this.document.createElement("button");

            rfrDel.innerHTML = "Radera";
            myName.innerHTML = localStorage.getItem("Mitt namn");

            document.body.appendChild(myName);
            document.body.appendChild(rfrDel);

                rfrDel.addEventListener("click", function(){
                    localStorage.clear();
                    myName.remove();
                rfrDel.remove();
        });
    }
}

var btnAdd = document.getElementById("btn");

btnAdd.addEventListener("click", myClick);

function myClick() {
    var myInput = document.getElementById("inp").value;
    var myContent = document.createElement("div");
    var btnDel = document.createElement("button");
    btnDel.id = "myDelete";
    btnDel.innerHTML = "Radera";
    myContent.innerHTML = myInput;
    document.body.appendChild(myContent);
    document.body.appendChild(btnDel);
    localStorage.setItem("Mitt namn", myInput);

    btnDel.addEventListener("click", function(){
       localStorage.clear();
       myContent.remove();
       btnDel.remove();
    });
}