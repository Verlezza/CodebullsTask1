$( document ).ready(function() {
    document.getElementById("sendForm").addEventListener("click", mostrarResultados);
    function mostrarResultados() {

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let tlfn = document.getElementById("tlfn").value;

        if (nombre) {
            document.getElementById("nombreSpan").innerHTML = nombre;
        } else{
            document.getElementById("nombreSpan").innerHTML = "No se indicó ningun dato";
        } 
        if (email) {
            document.getElementById("emailSpan").innerHTML = email;
        }else {
            document.getElementById("emailSpan").innerHTML = "No se indicó ningun dato";;
        }
        if (tlfn) {
            document.getElementById("tlfnSpan").innerHTML = tlfn;
        } else {
            document.getElementById("tlfnSpan").innerHTML = "No se indicó ningun dato";;
        }

        document.getElementById("Step1").style.display = "none";
        document.getElementById("Step2").style.display = "block";

    }
    document.getElementById("backForm").addEventListener("click", mostrarFormulario);
    function mostrarFormulario() {

        document.getElementById("Step1").style.display = "block";
        document.getElementById("Step2").style.display = "none";

    }
});
