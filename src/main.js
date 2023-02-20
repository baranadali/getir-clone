

// Footer Section Script
let getirFooterBtnOne = document.querySelector(".getiri-kesfedin")
let getirFooterBtnTwo = document.querySelector(".getir-yardim")
let getirFooterBtnThree = document.querySelector(".getir-isortagi");

let getirFooterList1 = document.querySelector(".getiri-kesfedin-list");
let getirFooterList2 = document.querySelector(".getir-yardim-list");
let getirFooterList3 = document.querySelector(".getir-isortagi-list");

getirFooterBtnOne.addEventListener("click", () => {
    getirFooterList1.classList.toggle("remove-footer")
    getirFooterList3.classList.add("remove-footer")
    getirFooterList2.classList.add("remove-footer")
})
getirFooterBtnTwo.addEventListener("click", () => {
    getirFooterList2.classList.toggle("remove-footer")
    getirFooterList3.classList.add("remove-footer")
    getirFooterList1.classList.add("remove-footer")
})
getirFooterBtnThree.addEventListener("click", () => {
    getirFooterList3.classList.toggle("remove-footer")
    getirFooterList1.classList.add("remove-footer")
    getirFooterList2.classList.add("remove-footer")
})










