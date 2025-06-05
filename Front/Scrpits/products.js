const select = document.querySelectorAll(".option")

for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("input", (e) =>{
        console.log(e.target.value)
    })
}

const minPrice = document.querySelector(".minPrice")
const maxPrice = document.querySelector(".maxPrice")

minPrice.addEventListener("input", (e)=>{
    console.log(e.target.value)
})

maxPrice.addEventListener("input", (e)=>{
    console.log(e.target.value)
})

const products = document.querySelectorAll(".prod")
for (let i = 0; i < products.length; i++) {
    console.log(products[i].value)
}