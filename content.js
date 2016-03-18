chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    
    var tds = document.querySelectorAll("table tbody tr");
    for (var i = 0; i < tds.length; i++) {
        var td = tds[i];
        for (var j = 0; j < td.cells.length; j++) {
            var cell = td.cells[j];
            if (cell.textContent && cell.textContent.indexOf("(closed)") > -1) {
                td.style.display = "none";
            }
        }
    }

});