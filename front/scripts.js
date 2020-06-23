function submitCalc() {
    var dataBody = {
        number1 : $("#number1").val(),
        number2: $("#number2").val()
    }
    console.log(dataBody);

    $.ajax(
        {
            url: "http://192.168.100.118:3000/sum",
            type: "POST",
            data: JSON.stringify(dataBody),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: (data)  => {
                console.log(data);
                alert(`Resultado: ${data.result}`)
            },
        },
    ).fail((jqXHR, textStatus, msg) => { alert('Erro ao conectar ao servidor!'); console.error(msg) });
}
