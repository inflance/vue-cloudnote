import $ from "jquery"

// $.ajaxSettings.beforeSend= function(request) {
//     console.log(request)
//     // request.setRequestHeader("Authorization",localStorage.getItem('token'));
//
// };
$.ajaxSetup({
    type: "POST" ,
    headers:{
        "Authorization":localStorage.getItem('token')
    },

})
$(document).ajaxSuccess(function(event,xhr,options){
    // console.log(event)
    // console.log(xhr.responseJSON)
    // console.log(options)
});
$(document).ajax.config({
    baseURL:"aaa"
})
