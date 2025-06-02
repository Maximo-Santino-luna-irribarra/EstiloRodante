function updatePreview() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const imageInput = document.getElementById('image');
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;

    document.getElementById('previewNombre').textContent = nombre || 'Nombre del Producto';
    document.getElementById('previewDescripcion').textContent = descripcion || 'Aquí irá la descripción del producto...';
    document.getElementById('previewType').textContent = type || '---';
    document.getElementById('previewPrice').textContent = `$${price || '0.00'}`;

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('previewImage').src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        document.getElementById('previewImage').src = 'https://via.placeholder.com/300x200';
    }
}