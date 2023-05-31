document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
    var item = document.querySelector("#item").value;//input value
    if (item == "") {
        alert("Input field is empty");
    }
    else {
        var input = document.querySelector("#item");
        if (input != "") {
            input.value = "";
        }
        var list = document.querySelector("#list");//ul
        var listtag = document.createElement("li");//li
        var para = document.createElement("p");
        para.innerHTML = `
        <input type="checkbox">
        <span>${item}</span>
       
      `;
        listtag.classList.add("mt-4", "fcol", "w-100", "ps-3", "pe-3");
        para.classList.add("w-75", "m-0", "bg-light", "p-2");
        listtag.appendChild(para);
        list.append(listtag);
        var spantag = document.createElement("span");
        spantag.classList.add("ps-3", "w-25");
        var delbtn = document.createElement("button");

        delbtn.innerHTML = "<i class='pe-2 bi bi-trash text-white'></i> X";
        delbtn.setAttribute("class", "deleteme");
        delbtn.classList.add("bg-white", "w-300", "text-dark", "p-6");
        spantag.appendChild(delbtn);
        listtag.appendChild(spantag);

        delbtn.addEventListener('click', (e) => {
            listtag.remove();
        })
    }
}