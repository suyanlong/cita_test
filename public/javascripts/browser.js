/**
 * Created by suyanlong on 2017/5/30.
 */
// curl -X POST -d '{"jsonrpc":"2.0","method":"cita_blockHeight","params":[],"id":2}' $IP:8080
// cita 提供的所有的方法
// cita_getLogs

// net_peerCount
// Request
// curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}'
// Result
// {
//     "id": 74,
//     "jsonrpc": "2.0",
//     "result": 2
// }

// cita_blockHeight
// cita_sendTransaction
// cita_getBlockByHash
// cita_getBlockByHeight
// cita_getTransaction
// cita_getTransactionReceipt
// cita_call


$(document).ready(
    function () {
        $(".btn").click(function () {
            var url = "/cita_test/";
            var data= '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}';
            AjxRequest(data, url);
            console.log(arguments);
        });
    }
);

function cita_blockHeight() {

    
}

function AjxRequest(data, url) {
    console.log(data);
    console.log(url);
    $.ajax({
            url: url,
            type: "post",
            contentType: "json",
            data: data,
            before: function (XMLHttpRequest) {
                // this;   //调用本次ajax请求时传递的options参数
                console.log("---before");
            },
            complete: function (XMLHttpRequest, textStatus) {
                // this;    //调用本次ajax请求时传递的options参数
                console.log("---complete");

            },
            success: function (data, textStatus) {
                console.log("---success");
                console(data);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("---error");
                console.log(textStatus);
                console.log(errorThrown);

            }

        }
    );
}