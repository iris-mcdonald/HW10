
$(document).ready(function () {
    $("#btn").click(function () {
        $("#btn").fadeOut(2000);
        $("#content").delay(2000).show(2000);
    });
});

var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("xhr.status after onload: = " + xhr.status);
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < responseObject.seaanimals.length; i++) {
            newContent += '<div class="seaanimal">';
            newContent += '<img class="favorites" src="' +
                responseObject.seaanimals[i].path + '" ';
            newContent += 'alt="' + responseObject.seaanimals[i].name + '" ';
            newContent += '<p>' + responseObject.seaanimals[i].name + ': ' +
                responseObject.seaanimals[i].description + '</p>';
            newContent += '</div>';
        }
        console.log("newContent: " + newContent);
        document.getElementById('content').innerHTML = newContent;
    }
};

$(document).ready(function () {
    xhr.open('GET', 'data/entities.json', true);
    xhr.send(null);
});



