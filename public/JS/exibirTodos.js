$.ajax({
  url: "http://localhost:1337/parse/classes/Filme",
  headers: {
    "X-Parse-Application-Id": "myAppId",
    "X-Parse-REST-API-Key": "1234",
  },
  success: function (result) {
    $("#result").text(JSON.stringify(result, undefined, 4));
  },
});
