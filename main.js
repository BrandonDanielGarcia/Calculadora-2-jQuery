$(document).ready(function () {
    $(accion).click(function () { 
        var opc = $(operacion).val();;
        switch (opc) {
            case '+': 
                var x = parseInt($("#num1").val());
                var y = parseInt($("#num2").val());
                $('#resultado').val(x+y);
            break;
            case '-': 
                var x = parseInt($("#num1").val());
                var y = parseInt($("#num2").val());
                $('#resultado').val(x-y);
            break;
            case '/':
                var x = parseInt($("#num1").val());
                var y = parseInt($("#num2").val());
                if ((x != 0) && (y != 0)) {
                    $('#resultado').val(x/y);
                } else {
                    alert("no es posible dividir con un cero como divisor o dividendo");
                }
            break;
            case '*':
                var x = parseInt($("#num1").val());
                var y = parseInt($("#num2").val());
                $('#resultado').val(x*y);
            break;
            default:
                alert("Ingrese un tipo de operacion")
            break;
        }
    });
});