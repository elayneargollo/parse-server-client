var query_value = "";
var query_key = null;

$("#buttonEnviar").click(function () {
  if ($("#byName").is(":checked")) {
    query_key = "titulo";
    query_value = $("#input_titulo").val();
  } else {
    query_key = "dataLancamento";
    query_value = $("#input_date").val();
  }

  $.ajax({
    url: "http://localhost:1337/parse/classes/Filme",
    headers: {
      "X-Parse-Application-Id": "myAppId",
      "X-Parse-REST-API-Key": "1234",
    },
    data: {
      where: '{"' + query_key + '":"' + query_value + '"}',
    },
    success: function (result) {
      $("#result").text(JSON.stringify(result, undefined, 4));
    },
  });
});
