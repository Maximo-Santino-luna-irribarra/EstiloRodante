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
            </div>
    `
     box.appendChild(product)
}

insertProducts()