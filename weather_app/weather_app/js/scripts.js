// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis

// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/

// pegar coordenadas do IP: http://www.geoplugin.net

// gerar gráficos em JS: https://www.highcharts.com/demo


$(function() {
    DadosIniciais(MaxMin)
    function DadosIniciais(callback){
     const cidade =  $("#local").val()
     $.ajax({
         url:`https://api.hgbrasil.com/weather?format=json-cors&key=d3a9912f&city_name=${cidade}`,
         success:function(response){
             const Cidade = $("#texto_local").text(response['results']["city"])
             const DescricaoClima =  $("#texto_clima").text(response["results"]["description"])
             const TemperaturaAtual = $("#texto_temperatura").text(response["results"]["temp"])
             const ClimaIncon = $("#icone_clima").css('background-image', `${response["results"]["img_id"]}`)
             callback(response['results']['forecast'])
         }
     })
    }
    $("#search-button").click(function(){
    DadosIniciais(MaxMin)
    })
});

function MaxMin(response){
    $.each(response, function(index, props){
        const date =  new Date()
        const dias = new Array("Dom","Seg","Ter","Qua","Qui","Sex","Sáb")
        const hoje = dias[date.getDay()]
       if((props["weekday"]) === hoje & index === 0 ){
           $("#texto_max_min").text(` maxima ${props["max"]}  minima ${props["min"]}`)
       }
    })

   var TempProximo = (response.slice(1,[9]))
   $.each(TempProximo, function(index,props){
          
   })
}
    





