let items = document.querySelector("#items")
let quantity = document.querySelector("#quantity")
let inputForm = document.querySelector("#inputForm")
let total = document.querySelector('.total')
let delbtn = document.querySelector('.delbtn')
let totalPrint = document.querySelector('.totalPrint')
let tablehide = document.querySelector("#table")
let printBtn = document.querySelector("#printBtn")



function totalCost(){
    let costs = document.querySelectorAll('.cost');
    total.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
    totalPrint.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);

}
function del(event){
    if(confirm("Are you sure to delete")){
        event.target.parentElement.parentElement.remove();
        totalCost();   
    }
}

function delIcon(event){
        event.target.parentElement.parentElement.parentElement.remove();
        totalCost(); 
}    



products.forEach(function(product){

    let newOption = new Option(product.name,product.id);
    items.append(newOption);
    
})
inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProduct = products.find(product => product.id == items.value)
    let cost = currentProduct.price * quantity.valueAsNumber;   
    tablehide.style.visibility = "visible";
    printBtn.style.visibility = "visible";



    // console.log(items.value,quantity.value,currentProduct);

    let newTr = document.createElement("tr");

newTr.innerHTML = `
                   <td class="d-print-none text-center">
                   <button class=" btn  btn-danger-1 btn-sm delbtn" onclick="del(event)">
                      <i class="bi bi-trash3" onclick="delIcon(event)"></i>
                   </button>
                   </td>
                   <td class="text-center">${currentProduct.name}</td>
                   <td class="text-end">${currentProduct.price}</td>
                   <td class="text-end">${quantity.valueAsNumber} </td>
                   <td class="text-end cost">${cost}</td>
                   `;

            rows.append(newTr) ;   
            
        inputForm.reset();

        totalCost();
});







