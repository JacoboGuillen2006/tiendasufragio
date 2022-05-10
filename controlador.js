//OBJETOS
let producto1={
    nombre:"Aji-no-men",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Aji-no-men%20Pollo%20con%20verduras.jfif?alt=media&token=96b210a8-0eea-479f-a4a6-c6ec8a31347b"
}

let producto2={
    nombre:"Camisa negra de the owl house grom versión",
    precio:500000,
    estado:true,
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Camisa%20negra%20de%20The%20owl%20house%20grom%20versi%C3%B3n.png?alt=media&token=cdab9b7c-b2e1-483c-a808-052146f3929b"
}

let producto3={
    nombre:"Camiseta del Real Madrid edición el clasico",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Camiseta%20de%20Real%20Madrid%20el%20Clasico%20Edition.jpg?alt=media&token=9dded7a3-b14e-494e-92ba-e00757ab8a9e"
}

let producto4={
    nombre:"Funko pop de doctor strange supremo what if",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Funko%20Pop%20de%20Doctor%20strange%20Supremo.jpg?alt=media&token=2269fd40-f185-484b-bc6f-21ff7af236f4"
}

let producto5={
    nombre:"Funko pop de iron man con el guantelete de avengers end game",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Funko%20pop%20Iron%20man%20End%20game%20con%20el%20guantelete.jpg?alt=media&token=bb7cb5e8-47e6-435b-9e64-111fa0169142"
}

let producto6={
    nombre:"Funko pop de spider man no way home",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Funko%20pop%20de%20Spider%20Man.jpg?alt=media&token=a1b7baa5-f9fd-44db-9d59-808bc61b93ba"
}

let producto7={
    nombre:"Galletas oreo cubiertas",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Galleta%20Oreo%20Cubierta.jfif?alt=media&token=7e8ae6af-c49c-4465-8956-504907f38662"
}

let producto8={
    nombre:"Play station 5 perzonalizado de spider man",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Play%20station%205%20Perzonalizado%20(spider%20Man).jpg?alt=media&token=b53b76b7-9d18-4c64-b47e-2a76e9953bc5"
}

let producto9={
    nombre:"Sueter azul de the owl house lumity grom versión",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Sueter%20azul%20de%20the%20owl%20house%20lumity%20grom%20versi%C3%B3n.png?alt=media&token=e93bb860-ec24-411e-81fe-08cb11677532"
}

let producto10={
    nombre:"Sueter gris de The owl house hooty versión",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/Sueter%20gris%20de%20The%20owl%20house%20hooty%20versi%C3%B3n.jfif?alt=media&token=dc342bfc-c4d7-445c-b747-6f1ab25bf05a"
}

let producto11={
    nombre:"camiseta gris de the owl house lumity grom versión",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/camiseta%20gris%20de%20the%20owl%20house%20lumity%20grom%20versi%C3%B3n.jpg?alt=media&token=7ab7efec-080c-4550-b1c5-ead0f9a7882e"
}

let producto12={
    nombre:"producto12",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/latiendita-1db59.appspot.com/o/camiseta%20gris%20de%20the%20owl%20house%20lumity%20grom%20versi%C3%B3n.jpg?alt=media&token=7ab7efec-080c-4550-b1c5-ead0f9a7882e"
}

let producto13={
    nombre:"producto13",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto14={
    nombre:"producto14",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

//RECORRO EL ARREGLO
productos.forEach(function(producto){
    console.log(producto.nombre)
})

