function pegarDados(){
 		//alert("ok");
//document.querySelector(".esconder").sytyle.display = "block";
document.querySelector(".esconder").style.display = "block";
    let row  = document.querySelector('hr');
    row.classList.add('show');

    let result = document.querySelector('.hide');
    result.classList.remove('hide');
    result.classList.add('show');

 let camText = document.getElementById("texto").value; 
 //alert(camText);
document.getElementById("camText").innerHTML =  ("NOME:" + camText);

 let camTel = document.getElementById("fone").value;
 document.getElementById("campTel").innerHTML = ("TELEFONE:" + camTel);

 let camEmail = document.getElementById("e-mail").value;
 document.getElementById("camEmail").innerHTML = ("E-MAILL:" + camEmail);

 let camSenha = document.getElementById("senha").value;
 document.getElementById("camSenha").innerHTML = ("SENHA:" + camSenha);

 let checkbox_info = document.getElementById("info");
    let checkbox_adm = document.getElementById("adm");
    let checkbox_enf = document.getElementById("enf");

    if(checkbox_info.checked){
        document.getElementById("campoinfo").innerHTML = ("VOCÊ FALA INGLÊS")
    }if(checkbox_adm.checked){
        document.getElementById("campoadm").innerHTML = ("SVOCÊ FALA ESPANHOL")
    }if(checkbox_enf.checked){
        document.getElementById("campoenf").innerHTML = ("VOCÊ FALA ALEMÃO")
    }


    if(document.getElementById("info2").checked){
        document.getElementById("camporadio").innerHTML = ("SEU CURSO É: INFORMÁTICA")
    }else if(document.getElementById("adm2").checked){
        document.getElementById("camporadio").innerHTML = ("SEU CURSO É: ADMINISTRAÇÃO")
    }else if(document.getElementById("enf2").checked){
        document.getElementById("camporadio").innerHTML = ("SEU CURSO É: ENFERMAGEM")
    }

    let ocult = document.getElementById("oculto").value;
    document.getElementById("campooculto").innerHTML = ("VALOR OCULTO: " + ocult);

    let number = document.getElementById("num").value;
    document.getElementById("camponum").innerHTML = ("VOCÊ TEM: " + number + " anos");

    let data = document.getElementById("data").value;
    document.getElementById("campodata").innerHTML = ("SUA DATA DE NASCIMENTO É: " + data);

    let hora = document.getElementById("hora").value;
    document.getElementById("campohora").innerHTML = ("VOCÊ ACORDA ÀS: " +  hora + " hr");

    let range = document.getElementById("range").value;
    document.getElementById("camporange").innerHTML = ("O VALOR SELECIONADO FOI: " + range);

    let priFaixa = document.getElementById("priFaixa").value;
    document.getElementById("campofaixa").innerHTML = ("SUA COR FAVORITA É: " + faixa);
}