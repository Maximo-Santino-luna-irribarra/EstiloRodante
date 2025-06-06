let min = -99999999999999
let max = 999999999999999
let brand = ''
let model = ''
let tech = ''
let type = ''

const params = new URLSearchParams(window.location.search);
type = params.get("type");


const select = document.querySelectorAll(".option")

for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("input", (e) => {
    if (e.target.name == "brands") {
        brand = e.target.value;
    }
    if (e.target.name == "models") {
        model = e.target.value;
    }
    if (e.target.name == "type"){
        type = e.target.value
    }
    updateProducts();
    });
}

const minPrice = document.querySelector(".minPrice")
const maxPrice = document.querySelector(".maxPrice")

minPrice.addEventListener("input", (e)=>{
    min = parseFloat(e.target.value) || -Infinity
    updateProducts()
})

maxPrice.addEventListener("input", (e)=>{
    max = parseFloat(e.target.value) || Infinity
    updateProducts()
})

const insertProducts = () =>{
    fetch('/neumaticos_50.json')
    .then(res =>{
        return res.json()
    })
    .then(productos =>{
        for (let i = 0; i < productos.length; i++) {
            writeProduct(productos[i]['type'], productos[i]['marca'] , productos[i]['modelo'], productos[i]['medida'], productos[i]["indice_de_carga"], productos[i]["indice_de_velocidad"], productos[i]["precio"], productos[i]["caracteristicas"]['tecnologias'])
        }
    })
}
console.log(type)
let sortOrder = "";

document.getElementById("ordenar").addEventListener("input", (e) => {
    sortOrder = e.target.value;
    updateProducts();
});


const box = document.querySelector(".box");

const updateProducts = () => {
    box.innerHTML = '';
    fetch('/neumaticos_50.json')
        .then(res => res.json())
        .then(productos => {
            const filtrados = productos.filter(p => 
                filterProducts(
                    p['type'],
                    p['marca'],
                    p['modelo'],
                    p['caracteristicas']['tecnologias'],
                    p['precio']
                )
            );

            filtrados.sort((a, b) => {
                switch (sortOrder) {
                    case 'precio-asc':
                        return a.precio - b.precio;
                    case 'precio-desc':
                        return b.precio - a.precio;
                    case 'nombre-asc':
                        return a.modelo.localeCompare(b.modelo);
                    case 'nombre-desc':
                        return b.modelo.localeCompare(a.modelo);
                    default:
                        return 0;
                }
            });

            for (let i = 0; i < filtrados.length; i++) {
                const p = filtrados[i];
                writeProduct(
                    p['type'],
                    p['marca'],
                    p['modelo'],
                    p['medida'],
                    p["indice_de_carga"],
                    p["indice_de_velocidad"],
                    p["precio"],
                    p["caracteristicas"]['tecnologias']
                );
            }

            if (filtrados.length === 0) {
                box.innerHTML = `<div class="alert alert-warning text-center w-100">No se encontraron productos.</div>`;
            }
        });
};



const writeProduct = (tipo, marca, modelo, medida, indiceCarga, indiceVelocidad, precio, tecnologias)=>{
    if(filterProducts(tipo, marca, modelo, tecnologias, precio)){
        const box = document.querySelector(".box")
        const product = document.createElement("div")
        product.className = "col"
        product.innerHTML = `
                <div class="card h-100 shadow p-4 rounded-4 border-light">
                <div class="row g-4 align-items-start">
                    <div class="col-md-4 text-center">
                    <img src="/Img/wheel.png" class="" alt="Producto" style="width: 140px; height: 140px;">
                    <p class="mt-3 fw-bold text-primary fs-5">$${precio}</p>
                    </div>
                    <div class="col-md-8">
                    <h5 class="card-title text-uppercase">${modelo + medida}</h5>
                    <ul class="list-unstyled ps-3 small">
                        <li><strong>Tipo:</strong> ${tipo}</li>
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
                    <button class="btn btn-danger btn-sm px-5">Eliminar</button>
                    <button class="btn btn-primary btn-sm px-5">Editar</button>
                </div>
                `
        box.appendChild(product)
    }
}

const filterProducts = (tipo, marca, modelo, tecnologias, precio) => {
    precio = Number(precio);
    if (brand !== 'Todos' && brand !== '' && marca !== brand) {
        return false;
    }
    if (model !== 'Todos' && model !== '' && modelo !== model) {
        return false;
    }
    if (tech !== '' && !tecnologias.includes(tech)) {
        return false;
    }
    if (precio < min || precio > max) {
        return false;
    }
    if (type !== 'Todos' && type !== '' && tipo !== type) {
        return false;
    }
    return true;
};

insertProducts()