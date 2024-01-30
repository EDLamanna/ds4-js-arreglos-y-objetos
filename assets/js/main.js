// propiedades en venta

const propiedadesVentas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: "4 Habitaciones",
    banios: "4 Baños",
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: "2 Habitaciones",
    banios: "1 Baños",
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: "3 Habitaciones",
    banios: "3 Baños",
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento grande en céntrico conjunto residencial",
    src: "https://media.istockphoto.com/id/1165384568/es/foto/complejo-moderno-de-edificios-residenciales-en-europa.jpg?s=612x612&w=0&k=20&c=xh3tel4sYc7CR8XpooO9-2uaUxkCEXFWQxHiG5otF5E=",
    descripcion:
      "Este apartamento cuenta con una preciosa terraza y con buena distribución interna",
    ubicacion: "456 Manhattan, Prestige Suburb, CA 94678",
    habitaciones: "3 Habitaciones",
    banios: "3 Baños",
    costo: "4.800",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Hermosa casa de campo en el sur",
    src: "https://media.istockphoto.com/id/1272163106/es/foto/amplia-casa-con-techo-empinado-y-entrada-lateral-garaje-de-tres-coches.jpg?s=612x612&w=0&k=20&c=muYeOouBwhhF05_jXxZrDl6zeQaHjjkZ6wNq5hkTfuY=",
    descripcion: "Esta casa hará que tus vacaciones de verano sean únicas",
    ubicacion: "789 From the Field, South of Neverland, CA 377654",
    habitaciones: "4 Habitaciones",
    banios: "3 Baños",
    costo: "6.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa de lujo en centro financiero",
    src: "https://media.istockphoto.com/id/1282518866/es/foto/representaci%C3%B3n-en-3d-de-la-casa-moderna-en-estilo-lujoso.jpg?s=612x612&w=0&k=20&c=EzPRo8zu8lnbMvW74tkywaLRb5gkLlsfNj0V6ZftYj4=",
    descripcion:
      "Esta casa esta ubicada en todo el centro financiero de la ciudad",
    ubicacion: "032 Bank Road, financial city, CA 635212",
    habitaciones: "3 Habitaciones",
    banios: "3 Baños",
    costo: "4.800",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Finca de lujo en región vinicola",
    src: "https://media.istockphoto.com/id/682432560/es/foto/impresionante-exterior-de-casa-de-lujo-al-atardecer.jpg?s=612x612&w=0&k=20&c=H3qMfVXKUAQ_aeksz7qUlJdGt6rsMLdaXe5u3In8M54=",
    descripcion: "Esta finca cuenta con espacios para tener tu propio viñedo",
    ubicacion: "032 Grape Road, VII Region, CA 635212",
    habitaciones: "5 Habitaciones",
    banios: "3 Baños",
    costo: "12.000",
    smoke: true,
    pets: true,
  },
];

let html = "";

for (let ventaPorcion of propiedadesVentas) {
  if (ventaPorcion.smoke === true) {
    fumarR = "Permitido fumar";
    fumarC = "text-success";
    FumarI = `"fas fa-smoking"`;
  } else {
    fumarR = "No se permite fumar";
    fumarC = "text-danger";
    FumarI = `"fas fa-smoking-ban"`;
  }

  if (ventaPorcion.pets === true) {
    petsR = "Mascotas permitidas";
    PetsC = "text-success";
    PetsI = `"fas fa-paw"`;
  } else {
    petsR = "No se permiten mascotas";
    PetsC = "text-danger";
    PetsI = `"fa-solid fa-ban"`;
  }

  html += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src=${ventaPorcion.src} class="card-img-top" alt="Imagen del departamento"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${ventaPorcion.nombre}</h5>
                <p class="card-text">${ventaPorcion.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${ventaPorcion.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${ventaPorcion.habitaciones}
                    <i class="fas fa-bath"></i> ${ventaPorcion.banios}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${ventaPorcion.costo}
                </p>
                    <p class=${fumarC}>
                    <i class=${FumarI}></i> ${fumarR}
                </p>
                <p class=${PetsC}>
                    <i class=${PetsI}></i> ${petsR}
                </p>
            </div>
        </div>
`;
}

const validador = () => {
  const elementoVentas = document.querySelector("#row_venta");
  if (!elementoVentas) {
  } else {
    elementoVentas.innerHTML = html;
  }
};

validador();

// Propiedades en alquiler

const propiedadesCompras = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    banios: "2 Baños",
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3 Habitaciones",
    banios: "3 Baños",
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2 Habitaciones",
    banios: "2 Baños",
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento para familia pequeña",
    src: "https://media.istockphoto.com/id/1204742836/es/foto/apartamento-de-lujo-moderno.jpg?s=612x612&w=0&k=20&c=06Z2WHPr261YEDmVlp95iapYgBLQJo8yhZtNftpG65w=",
    descripcion: "Este apartamento es perfecto para personas recién casadas",
    ubicacion: "521 Main Street, Anytown, CA 91239",
    habitaciones: "2 Habitaciones",
    banios: "1 Baño",
    costo: "900",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Residencia en centro financiero",
    src: "https://media.istockphoto.com/id/488120139/es/foto/moderna-de-bienes-ra%C3%ADces.jpg?s=612x612&w=0&k=20&c=DYeB1o80UXydUWdIfsjhRwqc9vItClRhJ0A-T5I0A9c=",
    descripcion:
      "Este apartamento cuenta con una gran conectividad en la ciudad y con todos los servicios a un paso",
    ubicacion: "982 Bank Road, financial city, CA 635665",
    habitaciones: "2",
    banios: "2",
    costo: "1.500",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa para familia numerosa",
    src: "https://media.istockphoto.com/id/1362872948/es/foto/casa-energ%C3%A9ticamente-eficiente-con-paneles-solares-y-bater%C3%ADa-de-pared-para-almacenamiento-de.jpg?s=612x612&w=0&k=20&c=ei28hm8LUgS215784lY5kl857Ji-Gm4OLnkx34rJ5Jc=",
    descripcion:
      "Esta casa cuenta con espaciosas habitaciones y cocina full equipada",
    ubicacion: "777 Ocean Avenue, Seaside Town, CA 56435",
    habitaciones: "4",
    banios: "3",
    costo: "2.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa de campo por temporada",
    src: "https://media.istockphoto.com/id/1272128530/es/foto/casa-con-revestimiento-azul-y-fachada-de-piedra-en-la-base-de-la-casa.jpg?s=612x612&w=0&k=20&c=KlTo42Ns4BtUVbCHHbveT6T1ZFQVe1KPck6pU8G_LDk=",
    descripcion:
      "Esta casa es excelente para pasar tus vacaciones de verano en familia",
    ubicacion: "168 Grape Road, VII Region, CA 652912",
    habitaciones: "4",
    banios: "3",
    costo: "3.000",
    smoke: true,
    pets: true,
  },
];

let html2 = "";

for (let propiedadCompra of propiedadesCompras) {
  if (propiedadCompra.smoke === true) {
    fumarR = "Permitido fumar";
    fumarC = "text-success";
    FumarI = `"fas fa-smoking"`;
  } else {
    fumarR = "No se permite fumar";
    fumarC = "text-danger";
    FumarI = `"fas fa-smoking-ban"`;
  }

  if (propiedadCompra.pets === true) {
    petsR = "Mascotas permitidas";
    PetsC = "text-success";
    PetsI = `"fas fa-paw"`;
  } else {
    petsR = "No se permiten mascotas";
    PetsC = "text-danger";
    PetsI = `"fa-solid fa-ban"`;
  }

  html2 += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src=${propiedadCompra.src} class="card-img-top" alt="Imagen del departamento"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${propiedadCompra.nombre}</h5>
                <p class="card-text">${propiedadCompra.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedadCompra.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedadCompra.habitaciones}
                    <i class="fas fa-bath"></i> ${propiedadCompra.banios}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${propiedadCompra.costo}
                </p>
                    <p class=${fumarC}>
                    <i class=${FumarI}></i> ${fumarR}
                </p>
                <p class=${PetsC}>
                    <i class=${PetsI}></i> ${petsR}
                </p>
            </div>
        </div>
`;
}

const validador2 = () => {
  const elementoAlquiler = document.querySelector("#alquileres");
  if (!elementoAlquiler) {
  } else {
    elementoAlquiler.innerHTML = html2;
  }
};

validador2();

// Pagina inicio ventas

const ventasPorciones = propiedadesVentas.slice(0, 3);
let htmlIndexVentas = "";

for (let ventaPorcion of ventasPorciones) {
  if (ventaPorcion.smoke === true) {
    fumarR = "Permitido fumar";
    fumarC = "text-success";
    FumarI = `"fas fa-smoking"`;
  } else {
    fumarR = "No se permite fumar";
    fumarC = "text-danger";
    FumarI = `"fas fa-smoking-ban"`;
  }

  if (ventaPorcion.pets === true) {
    petsR = "Mascotas permitidas";
    PetsC = "text-success";
    PetsI = `"fas fa-paw"`;
  } else {
    petsR = "No se permiten mascotas";
    PetsC = "text-danger";
    PetsI = `"fa-solid fa-ban"`;
  }

  htmlIndexVentas += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src=${ventaPorcion.src} class="card-img-top" alt="Imagen del departamento"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${ventaPorcion.nombre}</h5>
                <p class="card-text">${ventaPorcion.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${ventaPorcion.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${ventaPorcion.habitaciones}
                    <i class="fas fa-bath"></i> ${ventaPorcion.banios}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${ventaPorcion.costo}
                </p>
                    <p class=${fumarC}>
                    <i class=${FumarI}></i> ${fumarR}
                </p>
                <p class=${PetsC}>
                    <i class=${PetsI}></i> ${petsR}
                </p>
            </div>
        </div>
`;
}

const validadorIndexVentas = () => {
  const elementoVentasIndex = document.querySelector("#row_venta_index");
  if (!elementoVentasIndex) {
  } else {
    elementoVentasIndex.innerHTML = htmlIndexVentas;
  }
};

validadorIndexVentas();

// Pagina inicio compras

const compraPorciones = propiedadesCompras.slice(0, 3);
let htmlIndexCompras = "";

for (let propiedadCompra of compraPorciones) {
  if (propiedadCompra.smoke === true) {
    fumarR = "Permitido fumar";
    fumarC = "text-success";
    FumarI = `"fas fa-smoking"`;
  } else {
    fumarR = "No se permite fumar";
    fumarC = "text-danger";
    FumarI = `"fas fa-smoking-ban"`;
  }

  if (propiedadCompra.pets === true) {
    petsR = "Mascotas permitidas";
    PetsC = "text-success";
    PetsI = `"fas fa-paw"`;
  } else {
    petsR = "No se permiten mascotas";
    PetsC = "text-danger";
    PetsI = `"fa-solid fa-ban"`;
  }

  htmlIndexCompras += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src=${propiedadCompra.src} class="card-img-top" alt="Imagen del departamento"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${propiedadCompra.nombre}</h5>
                <p class="card-text">${propiedadCompra.descripcion}</p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedadCompra.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedadCompra.habitaciones}
                    <i class="fas fa-bath"></i> ${propiedadCompra.banios}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i> ${propiedadCompra.costo}
                </p>
                    <p class=${fumarC}>
                    <i class=${FumarI}></i> ${fumarR}
                </p>
                <p class=${PetsC}>
                    <i class=${PetsI}></i> ${petsR}
                </p>
            </div>
        </div>
`;
}

const validadorIndexCompras = () => {
  const elementoVentasIndexCompras =
    document.querySelector("#alquileres_index");
  if (!elementoVentasIndexCompras) {
  } else {
    elementoVentasIndexCompras.innerHTML = htmlIndexCompras;
  }
};

validadorIndexCompras();