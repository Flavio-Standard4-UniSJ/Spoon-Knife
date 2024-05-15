let btn_js = document.getElementById("btn-js").addEventListener('click', () => {
    let v1 = Number(document.getElementById("v1").value);
    let v2 = Number(document.getElementById("v2").value);
    let soma = v1 + v2;
    let res = document.getElementById("res").value=soma;
})

$("#btn-jq").click(() => {
    let v1 = Number($("#v1").val());
    let v2 = Number($("#v2").val());
    let soma = v1 + v2;
    $("#res").val(soma);
})