$(function(){

document.body.addEventListener('touchstar',function () {

});
    $('#xuan>label').click(function(){

        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('#laz')){
            $(this).children('input').focus();
        }

    });
$('#butt1').click(function(){
    $("#tan").removeClass('d-none');

});

    $(".t-but").click(function(){
        $("#tan").addClass('d-none');

    });

    $('.but').click(function(){
        var aa= /^1[3|5|6|7|8|9][0-9]{9}$/;
        var i= $('#hao').val();
        if(aa.test(i)){
            $("#tan2").removeClass('d-none');
            //alert("请填写完整");
            $("#ts1").addClass('d-none');


        }else{
            $("#ts1").removeClass('d-none');
        }



    });




















/*$('.butt2-1').click(function () {
    var but=$('.butt2-1')

    but.siblings('.butt2-2').css({background:"white"})
        .css("border","1px solid #ffe5f3")
        .css("color","black")
        .css("box-shadow","inset 0 0 0 rgba(223,120,172,1)"),
        $("#butt2_1").hide(),

    but.css("box-shadow","inset 0 -4px 0 rgba(223,120,172,1)")
        .css({background:"#fb9ac7"})
        .css("color","white")
    $('#butt2_2').val('自定义')

})

    $('#butt2_3').click(function () {
        var but=$('#butt2_3')

        but.siblings('.butt2-2').css({background:"white"})
            .css("border","1px solid #ffe5f3")
            .css("color","black")
            .css("box-shadow","inset 0 0 0 rgba(223,120,172,1)"),
            $("#butt2_1").hide(),
            // $('').css("display","none"),
            but.css("box-shadow","inset 0 -4px 0 rgba(223,120,172,1)")
                .css({background:"#fb9ac7"})
                .css("color","white")
        $('#butt2_2').val('自定义')

    })

    $('#xin').click(function () {
        var but=$('#xin')

        but.siblings('.butt2-2').css({background:"white"})
            .css("border","1px solid #ffe5f3")
            .css("color","black")
            .css("box-shadow","inset 0 0 0 rgba(223,120,172,1)"),
            $("#butt2_1").show(),

            // $('#butt2_1').css("display","none"),
            but.css("box-shadow","inset 0 -4px 0 rgba(223,120,172,1)")
                .css({background:"#fb9ac7"})
                .css("color","white")
            $('#butt2_2').val('自定义')

    })

    $('#butt2_2').click(function () {
        var but=$('#butt2_2')

        but.siblings('.butt2-2').css({background:"white"})
            .css("border","1px solid #ffe5f3")
            .css("color","black")
            .css("box-shadow","inset 0 0 0 rgba(223,120,172,1)"),
            $("#butt2_1").hide(),
            // $('').css("display","none"),
            but.css("box-shadow","inset 0 -4px 0 rgba(223,120,172,1)")
                .css({background:"#fb9ac7"})
                .css("color","white")

            but.val("")



    })*/


})
