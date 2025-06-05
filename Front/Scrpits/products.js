let min = -99999999999999
let max = 999999999999999
let brand = 'BFGoodrich'
let model = 'Trail Terrain T/A'
let tech = ''

const select = document.querySelectorAll(".option")

for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("input", (e) =>{
        if(e.target.name == "brands"){
            brand = e.target.value
        }
        if(e.target.name == "models"){
            model = e.target.value
        }
    })
}

const minPrice = document.querySelector(".minPrice")
const maxPrice = document.querySelector(".maxPrice")

minPrice.addEventListener("input", (e)=>{
    min = e.target.value    
})

maxPrice.addEventListener("input", (e)=>{
    max = e.target.value
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
    if(filterProducts(marca, modelo, tecnologias, precio)){
        const box = document.querySelector(".box")
        const product = document.createElement("div")
        product.className = "col"
        product.innerHTML = `
                <div class="card h-100 shadow p-4 rounded-4 border-light">
                <div class="row g-4 align-items-start">
                    <div class="col-md-4 text-center">
                    <img src="/Img/rin.png" class="" alt="Producto" style="width: 140px; height: 140px;">
                    <p class="mt-3 fw-bold text-primary fs-5">$490.179</p>
                    </div>
                    <div class="col-md-8">
                    <h5 class="card-title text-uppercase">Trail Terrain T/A</h5>
                    <ul class="list-unstyled ps-3 small">
                        <li><strong>Marca:</strong> ${marca}</li>
                        <li><strong>Modelo:</strong> ${modelo}</li>
                        <li><strong>Medida:</strong>${medida}</li>
                        <li><strong>Indice de carga:</strong> ${indiceCarga}</li>
                        <li><strong>Indice de Velocidad:</strong> ${indiceVelocidad}</li>
                        <li><strong>Tecnologia:</strong> ${tecnologias}</li>
                        <li><strong>Precio:</strong> $${precio}</li>
                    </ul>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn- btn-sm px-5">Eliminar</button>
                    <button class="btn btn-primary btn-sm px-5">Editar</button>
                </div>
                `
        box.appendChild(product)
    }
}

const filterProducts = (marca, modelo, tecnologias, precio) =>{
    if(marca != '' && marca != brand){
        return false
    }
    if(modelo != '' && modelo != model){
        return false
    }
    if(tecnologias[0] != '' && !(tech.includes(`${tecnologias[0]}`))){
        console.log(tech.includes(`${tecnologias[0]}`))
        console.log(tecnologias[0] != '')
        return false
    }
    if(precio > max || precio < min){
        return false
    }
    return true
}

insertProducts()