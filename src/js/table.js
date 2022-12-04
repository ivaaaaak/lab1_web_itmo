const table = document.getElementById("result-table");
const clearAnimation = document.getElementById("clear-animation");

$.ajax({
    url: "php/send_table.php",
    type: "GET",
    dataType:"html",
    success: function (data) {
        table.insertAdjacentHTML('beforeend', data);
    }
});

$("#clear-button").on("click", function () {
    $.ajax({
        url:"php/clear_table.php",
        type: "GET",
        success: function () {
            table.innerHTML = " <tr>\n" +
                "                <th>№</th>\n" +
                "                <th>X</th>\n" +
                "                <th>Y</th>\n" +
                "                <th>R</th>\n" +
                "                <th>Result</th>\n" +
                "                <th>Attempt time</th>\n" +
                "                <th>Processing time</th>\n" +
                "            </tr>"
        }
    })
    clearAnimation.hidden = false;
    setTimeout(function () {
        clearAnimation.hidden = true
    }, 5000)
});


