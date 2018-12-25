document.addEventListener('keydown',function(){ //监听ctrl-c事件
    if(e.ctrlKey && e.keyCode  == 67) { 
        event.stopPropagation(); //阻止事件进一步冒泡,或者被其他监听器捕获
    }
},true);

document.addEventListener('copy',function(){ //监听鼠标右键的copy事件
    event.stopPropagation(); //同上
},true);
//js is fun!!

// var ad = $('iframe');
// for (let i in ad)
// {
//     if( ad[i].tagName && ad[i].tagName == "IFRAME" )
//     {
//         if( ad[i].parentNode.tagName == "DIV" )
//         {
//             ad[i].parentNode.style['display'] = "none";
//             if( ad[i].parentNode.parentNode.tagName == "DIV" )
//             {
//                 ad[i].parentNode.parentNode.style['display'] = "none";
//             }
//         }
//     }
// }
