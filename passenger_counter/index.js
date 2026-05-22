let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;
function increment(){
    console.log("click")
    count +=1
    countEl.textContent = count
}
function save(){
    console.log("click")
    let countStr = count + "-"
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count

}