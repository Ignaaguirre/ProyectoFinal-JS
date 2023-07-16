document.querySelector("#mostrar-login").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.add("active");
}
);
document.querySelector(".login-popup .close-btn").addEventListener("click", function(){
  document.querySelector(".login-popup").classList.remove("active");
}
);


document.querySelector("#mostrar-registrarse").addEventListener("click", function(){
  document.querySelector(".registrarse-popup").classList.add("active");
}
);
document.querySelector(".registrarse-popup .close-btn").addEventListener("click", function(){
  document.querySelector(".registrarse-popup").classList.remove("active");
}
);
  const usuarioEjemplo = {
    correoSesion: "usuario@gmail.com",
    contraseñaSesion:"contraseña"
  }
 //obtengo el boton de iniciar sesion 
  let iniciarSesion = document.getElementById("iniciar-sesion");

  // agrego event listener
  iniciarSesion.addEventListener("click", function(event) {
    event.preventDefault(); 

    // obtengo valores del input 
    let input1Valor = document.getElementById("inputEmail-1").value;
    let input2Valor = document.getElementById("inputContraseña-1").value;

    // comparo valores
    if (input1Valor === usuarioEjemplo.correoSesion && input2Valor === usuarioEjemplo.contraseñaSesion) {
     alert("SESION INICIADO CORRECTAMENTE.")


    } else {
      alert("CONTRASEÑA O CORREO INCORRECTO. INTENTE NUEVAMENTE");
    }
  });

    // Array vacio
    let inputRegistrarse = [];


    let nombreUsuario = document.getElementById("inputNombre");
    let emailUsuario = document.getElementById("inputEmail");
    let contraUsuario = document.getElementById("inputContraseña")  ;
    let edadUsuario = document.getElementById("inputEdad");
    let submitButton = document.getElementById("registrarse-btn");

    // agrego event listener
    submitButton.addEventListener("click", function() {
      //obtengo valores de los input
      let valorNombre = nombreUsuario.value;
      let valorEmail = emailUsuario.value;
      let valorContraseña = contraUsuario.value;
      let valorEdad = edadUsuario.value;

      // agrego valores al array
      inputRegistrarse.push(valorNombre, valorEmail, valorContraseña,valorEdad);



      //compruebo si anda (no me leia el email)
      console.log(inputRegistrarse);
      console.log(valorEmail)

  
    });





