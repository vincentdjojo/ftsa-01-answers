$(()=>{
    $.ajax({
        method:"get",
        url:"/data.json"
    }).done((data)=>{
        console.log(data);
    }).fail((err)=>{
        console.log(err);
    });
});