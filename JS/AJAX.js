var init;
var Graf_NR = 0;
$.ajaxSetup({ cache: false });
var AjaxReciveTime;
var AjaxSendTime;
var html_txt = "";

function GetData() {

    if ((Graf_NR >= 18) && (Graf_NR < 21)) {
        Graf_NR++;
    }
    else if (Graf_NR === 21) {
        for (NR_X = 18; NR_X > 0; NR_X--) {
            $('.NR' + NR_X).css({ "height": '0px', 'transition-duration': '0s' });
        }
        console.log('Reseting graf stage 1');
        Graf_NR++;
        $(".connection .status").html('<span class="green">Reseting graf...</span>');
    }

    else if (Graf_NR === 22) {
        for (NR_X = 18; NR_X > 0; NR_X--) {
            $('.NR' + NR_X).css({ 'transition-duration': '0.5s' });
        }
        console.log('Reseting graf stage 2');
        Graf_NR++;
    }

    else if (Graf_NR === 23) {
        Graf_NR = -1;
        console.log('Reseting graf stage 3');
        Graf_NR++;
        html_txt = "";
    } else {

        var AjaxSend = new Date();
        AjaxSendTime = AjaxSend.getTime();

        $.ajax({
            method: "GET",
            url: "data1.php",
            dataType: "text",
            success: function (result) {

                if (Graf_NR < 18) {
                    console.log("connection success");
                    var Data = result;
                    var Graf_Height = Math.round(result * 2.575) + 'px';
                    Graf_NR++;
                    console.log("Graf_Height:" + Graf_Height + " Graf_NR:" + Graf_NR);
                    $('.NR' + Graf_NR).css("height", Graf_Height);
                    var AjaxRecive = new Date();
                    AjaxReciveTime = AjaxRecive.getTime();

                    var time = AjaxReciveTime - AjaxSendTime;
                    var time_text = "";

                    if (time < 100) { time_text = '<span class="green">' + time + '</span>'; }
                    if (time >= 100) { time_text = '<span class="yelow">' + time + '</span>'; }
                    if (time >= 500) { time_text = '<span class="orange">' + time + '</span>'; }
                    if (time >= 1000) { time_text = '<span class="red">' + time + '</span>'; }

                    html_txt = html_txt + ('<div class="line"><div class="box left">Online reciving data: [ nr: <b>' + Graf_NR + '</b> ] [ data: <b>' + Data + '</b> ]</div> <div class="box right">Server response time: [ ' + (time_text) + 'ms ]</div></div>');
                    $(".connection .status").html(html_txt);
                }
            },
            error: function () {
                $(".connection .status").html('<span class="red"><b>Waiting for server...</b></span>');
            }
        });
    }
}

$(document).ready(function () {
    var init = setInterval(GetData, 2000);
});
