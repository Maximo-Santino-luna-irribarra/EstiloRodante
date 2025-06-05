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

const insertProducts = () =>{
    fetch('/neumaticos_50.json')
    .then(res =>{
        return res.json()
    })
    .then(productos =>{
        for (let i = 0; i < productos.length; i++) {
            writeProduct(productos[i]['marca'] , productos[i]['modelo'], productos[i]['medida'], productos[i]["indice_de_carga"], productos[i]["indice_de_velocidad"], productos[i]["precio"], productos[i]["caracteristicas"]['tecnologias'])
        }
    })
}

const writeProduct = (marca, modelo, medida, indiceCarga, indiceVelocidad, precio, tecnologias)=>{
    let product = `
    
    `
    console.log(marca, modelo, medida, indiceCarga, indiceVelocidad, precio, tecnologias)
}

insertProducts()