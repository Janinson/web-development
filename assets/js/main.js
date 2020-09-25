const metodos = {
    capturarDatos: () => {
      let txtCorreo = document.getElementById("txtCorreo");
      let txtAsunto = document.getElementById("txtAsunto");
      let txtMensaje = document.getElementById("txtMensaje");
      console.log(txtAsunto.value, txtMensaje.value, txtCorreo.value);
  
      let correo = txtCorreo.value;
      let asunto = txtAsunto.value;
      let mensaje = txtMensaje.value;
  
      let validacion = validarInformacion(correo, asunto, mensaje);
      if (validacion) {
        console.log("Validación", validacion);
        let contacto = {};
        contacto.correo = correo;
        contacto.asunto = asunto;
        contacto.mensaje = mensaje;
        //TODO: Pendiente de terminar el formulario de contacto con el backend.
        console.log("JSON contacto", contacto);
      } else {
        alert("Datos incorrectos.");
      }
    },
};
  
const validarInformacion = (correo, asunto, mensaje) => {
    return correo.length > 0 && asunto.length > 0 && mensaje.length > 0;
};
  