var file;

var input_titulo = null;
var input_dataLancamento = null;
var input_descricao = null;

$("#arquivo").bind("change", function (e) {
  var files = e.target.files || e.dataTransfer.files;
  file = files[0];
});

$("#enviar").click(function () {
  input_titulo = $("#input_titulo").val();
  input_dataLancamento = $("#input_dataLancamento").val();
  input_descricao = $("#input_descricao").val();

  var serverUrl = "http://localhost:1337/parse/files/" + file.name;

  $.ajax({
    type: "POST",
    beforeSend: function (request) {
      request.setRequestHeader("X-Parse-Application-Id", "myAppId");
      request.setRequestHeader("X-Parse-REST-API-Key", "1234");
      request.setRequestHeader("Content-Type", file.type);
    },
    url: serverUrl,
    data: file,
    processData: false,
    contentType: false,
    success: function (data) {
      var classUrl = "http://localhost:1337/parse/classes/Filme";

      if (data) {
        var fileName = "" + data.name;

        $.ajax({
          type: "POST",
          beforeSend: function (request) {
            request.setRequestHeader("X-Parse-Application-Id", "myAppId");
            request.setRequestHeader("X-Parse-REST-API-Key", "1234");
            request.setRequestHeader("Content-Type", "application/json");
          },
          url: classUrl,
          data:
            '{"titulo" : "' +
            input_titulo +
            '","descricao":"' +
            input_descricao +
            '","dataLancamento":"' +
            input_dataLancamento +
            '" ,"imagem" : {"name" : ' +
            '"' +
            fileName +
            '"' +
            ', "__type" : "File"}}',
          processData: false,

          success: function (data) {
            alert("data successfully uploaded.");
          },

          error: function (error) {
            alert("Error: " + error.message);
          },
        });

        console.log(data);
      }
    },
    error: function (data) {
      var obj = jQuery.parseJSON(data);
      alert(obj.error);
    },
  });
});
