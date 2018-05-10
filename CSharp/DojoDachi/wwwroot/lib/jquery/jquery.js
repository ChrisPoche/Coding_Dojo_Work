// $(document).ready(function(){
//     $("form").submit(function(res){
//         res.preventDefault();
//         if(this.id == "Feed"){
//             feedAjax();
//         }
//         if(this.id == "Play"){
//             playAjax();
//         }
//         if(this.id == "Work"){
//             workAjax();
//         }
//         if(this.id == "Sleep"){
//             sleepAjax();
//         }
//         if(this.id == "Reset"){
//             resetAjax();
//         }
//         location.reload(true);
//     })
//     var url = "http://localhost:5000/";
//     function resetAjax(){
//         var newUrl = url+"reset";
//         $.ajax({
//             "type": "POST",
//             "url": newUrl,
//             "success": function (msg) {
//                 console.log("success!");
//             },
//             "error": function (msg) {
//                 console.log("error!");
//             }
//         })
//     }
//     function feedAjax(){
//         var newUrl = url+"feed";
//         $.ajax({
//             "type": "POST",
//             "url": newUrl,
//             "success": function (msg) {
//                 console.log("success!");
//             },
//             "error": function (msg) {
//                 console.log("error!");
//             }
//         })
//     }
//     function sleepAjax(){
//         var newUrl = url+"sleep";
//         $.ajax({
//             "type": "POST",
//             "url": newUrl,
//             "success": function (msg) {
//                 console.log("success!");
//             },
//             "error": function (msg) {
//                 console.log("error!");
//             }
//         })
//     }
//     function playAjax(){
//         var newUrl = url+"play";
//         $.ajax({
//             "type": "POST",
//             "url": newUrl,
//             "success": function (msg) {
//                 console.log("success!");
//             },
//             "error": function (msg) {
//                 console.log("error!");
//             }
//         })
//     }
//     function workAjax(){
//         var newUrl = url+"work";
//         $.ajax({
//             "type": "POST",
//             "url": newUrl,
//             "success": function (msg) {
//                 console.log("success!");
//             },
//             "error": function (msg) {
//                 console.log("error!");
//             }
//         })
//     }
// })