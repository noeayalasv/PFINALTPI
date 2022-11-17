
  function validarCampos()
  {

    //Variables para usar y validar los campos necesarios
    let name = document.getElementById("name").value; 
    let age = document.getElementById("age").value;   
    let username = document.getElementById("username").value;
    let country = document.getElementById("country").value;
    let ImageProfile = document.getElementById("image").value;
    let adress = document.getElementById("adress").value; 
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

/////// VALIDAR CAMPOS DE TEXTO VACIOS ////////////////////////////////////////

    //para validar los campos donde se ingresa texto no queden vacios todos
    if(name == "" && age == "" && username == "" && country == "" && adress == "" && email == "") {
      alert("Debe rellenar todos los campos");
      document.getElementById("name").style.border = "2px solid red";
      document.getElementById("age").style.border = "2px solid red";
      document.getElementById("username").style.border = "2px solid red";
      document.getElementById("country").style.border = "2px solid red";
      document.getElementById("adress").style.border = "2px solid red";
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("pass").style.border = "2px solid red";
      return false;
    }

    //para cuando se deja un solo campo vacio
if(name == "" || age == "" || username == "" || country == "" || adress == "" || email == ""  || password == "") {
      alert("Verifique y rellene todos los campos");
      
      document.getElementById("name").style.border = "2px solid red";
      document.getElementById("age").style.border = "2px solid red";
      document.getElementById("username").style.border = "2px solid red";
      document.getElementById("country").style.border = "2px solid red";
      document.getElementById("adress").style.border = "2px solid red";
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("pass").style.border = "2px solid red";
      return false;
    }
    
    //Se compara la expreseion regular de solo letras May o min permitiendo uso de espacio con el valor ingresado
    //la s permite espacios entre palabras
    let nameLetters = /^[a-zA-Z\s]*$/;
    if(!nameLetters.exec(name)){
        alert("Nombre Invalido, no se permiten numeros, ni simbolos!");
        document.getElementById("name").style.border = "2px solid red";
        return false;
    }

    //se valida el tamaño minimo de caracteres que puede incluir el nombre
    let nameLength = /.{3,}/;

    if(!nameLength.exec(name)){
      alert("El nombre debe tener minimo 3 caracteres o mas letras");
      document.getElementById("name").style.border = "2px solid red";
      return false;
    }

    //si valida el tamaño minimo y los tipos de datos que se pueden ingresar
    let userNameLength = /.{6,}/;

    if(!userNameLength.exec(username)){
      alert("nombre de usuario muy pequeño, al menos 6 caracteres o mas");
      document.getElementById("username").style.border = "2px solid red";
      return false;
    }

    let userNameLetter = /^[a-zA-Z0-9\_]+$/;

    if(!userNameLetter.exec(username)){
      alert("El usuario debe contener solo letras/numeros y guio bajo sin espacios");
      document.getElementById("username").style.border = "2px solid red";
      return false;
    }

    //username no contenga espacios ni al inicio, centro o al final
    if(/\s/.test(username))
    {
      alert("el usuario no debe contener espacios en blanco.");
      document.getElementById("username").style.border = "2px solid red";
      return false;
    }  


    //validaciones de solo texto y rango para input country
    let countryLetters = /^[a-zA-Z\s]*$/;
    if(!countryLetters.exec(country)){
        alert("Country Invalido, no se permiten numeros, ni simbolos!");
        document.getElementById("country").style.border = "2px solid red";
        return false;
    }

    //se valida el tamaño minimo de caracteres que puede incluir el country
    let countryLength = /.{4,}/;

    if(!countryLength.exec(country)){
      alert("Country debe tener minimo 4 caracteres o mas letras");
      document.getElementById("country").style.border = "2px solid red";
      return false;
    }

//se valida el tamaño minimo de caracteres que puede incluir adress
    let adressLength = /.{6,}/;

    if(!adressLength.exec(adress)){
      alert("Adress debe tener minimo 6 caracteres o mas letras");
      document.getElementById("adress").style.border = "2px solid red";
      return false;
    }
    
//accede al name de el form y al name de el input fyle para verificar que no este vacio
if(document.form.imageProfile.value==""){
			alert("Debe insertar una imagen de perfil");
      return false;
		}

    //Valida que la extension que se obtenga de la ruta de donde proviene la image por el value sea compatible
    let rutaImage = ImageProfile;
    let extImage = /(.png|.jpg)$/i;

    if(!extImage.exec(rutaImage)){
      alert("Imagen Invalida! Debe tener formato: .png ó .jpg");
      document.getElementById("imageProfile").style.border = "2px solid red";
      return false;
    }
    
    //VALIDAR EDAD
    if(age<18)
    {
      alert("La edad debe ser mayor o igual a 18 años");
      document.getElementById("age").style.border = "2px solid red";
      return false;
    }

    /////// VALIDAR RADIOS QUE NO QUEDEN SIN MARCAR ////////////////////////////////////////

    // obtenemos todos los input radio del grupo genero y rol que esten chequeados
    // si no hay ninguno lanzamos alerta
  
    //en este caso es cuando ninguna de las categorias se ha seleccionado
    if(!document.querySelector('input[name="gender"]:checked') && !document.querySelector('input[name="rol"]:checked')) {
      alert('Error, por favor, completa las opciones de GENERO y ROL');
      document.getElementById("gender").style.border = "2px solid red";
      return false;
    }

    // en este caso cuando solo se ha seleccionado el rol pero no el genero o viceversa
    if(!document.querySelector('input[name="rol"]:checked') || !document.querySelector('input[name="gender"]:checked')) {
      alert('Verifique y seleccione una opción de ROL y/o GENERO');
      return false;
    }

    /////// VALIDAR CORREO, ES DECIR QUE TENGA ESTA FORMA example@gmail.com ////////////////////////////////////////
    expresion = /\w+@\w+\.+[a-z]/; 
    if (!expresion.test(email)) {
      alert("El email: "+email+" no es valido. Debe contener @ y extension -> example@gmail.com");    
      document.getElementById("email").style.border = "2px solid red";
      return false;
    }

    //////////////////////// VALIDACION DE CONTRASEÑA //////////////////////////////////////////

    //contraseña con mas de 8 caracteres, una mayuscula y una minuscula, un caracter y almenos un número con
    //la siguente expresión 
    var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

    if(/\s/.test(password))
    {
      alert("La contraseña no debe contener espacios en blanco.");
      document.getElementById("pass").style.border = "2px solid red";
      return false;
    }   
    else if(password.match(ExpRegPassFuerte)!=null) 
    {
      //si los demás datos están bien y la contraseña es segura, se envian los datos del formulario
      alert("DATOS VALIDOS!");
      return true;
    }
    else
    {
      alert("CONTRASEÑA INVALIDA! Debe contener al menos 8 caracteres, una mayuscula y una minuscula, un caracter especial +*. y almenos un número!");
      document.getElementById("pass").style.border = "2px solid red";
      return false;
    }
     
  }