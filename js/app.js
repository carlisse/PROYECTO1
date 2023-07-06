//Evento para crear un nuevo libro
document.getElementById("formulario").addEventListener("submit", crear);

//Funcion Crear

function crear(e){
    titulo = document.getElementById("titulo").value
    descripcion = document.getElementById("descripcion").value
    precio = document.getElementById("precio").value

    let libro ={
        titulo,
        descripcion,
        precio
    }

    if(localStorage.getItem("Libros") === null){
        let libros = []
        libros.push(libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }else{
        let libros = JSON.parse(localStorage.getItem("Libros"))
        libros.push(libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }

    leer();
    document.getElementById("formulario").reset();
    console.log("Libro guardado correctamente")
    e.preventDefault()
}


//Funcion "leer"

function leer(){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    document.getElementById("tbody").innerHTML =""
    for(let i=0; i < libros.length; i++){
        let titulo = libros[i].titulo
        let descripcion = libros[i].descripcion
        let precio = libros[i].precio

        document.getElementById("tbody").innerHTML +=
        `<tr>
           <td>${titulo}</td>
           <td>${descripcion}</td>
           <td>${precio}</td>
           <td><button onclick="eliminar('$
           {titulo}')" class="btn
           btn-danger">Eliminar</button></td>
           <td><button onclick="editar('$
           {titulo}')" class="btn
           btn-success">Editar</button></td>
        </tr>
        `
    }
}

//funcion "Editar"
function editar(titulo){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    for (let i=0; i<libros.length; i++){
        if(libros[i].titulo === titulo){
            document.getElementById("body").
            innerHTML =` <div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar libro</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newtitulo" class="form-control my-3" placeholder="Ingresar título">
                            </div>
                            <div class="form-group">
                                <textarea id="newdescripcion" class="form-control my-3" placeholder="Ingresar descripción"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form-control my-3" placeholder="Ingresar precio">
                            </div>
                        </form>

                    </div>
                </div>
            
            
            `
        }
    }
}

leer();