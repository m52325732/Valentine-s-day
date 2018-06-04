$(function(){

document.body.addEventListener('touchstar',function () {

});
// 按钮
    $('#xuan>label').click(function(){

        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('#laz')){
            $(this).children('input').focus();
        }

    });
    // 第一弹窗
$('#butt1').click(function(){
    $("#tan").removeClass('d-none');

});
// 弹窗关闭
    $(".t-but").click(function(){
        $("#tan").addClass('d-none');

    });

    // 支付按钮
    $('.but').click(function(){
        var aa= /^1[3|5|6|7|8|9][0-9]{9}$/;
        var i= $('#hao').val();
        if(aa.test(i)){
            $("#tan2").removeClass('d-none');

            $("#ts1").addClass('d-none');


        }else{
            $("#ts1").removeClass('d-none');
        };

    // 关闭第二弹窗
        $('#tan2-but1').click(function () {
            $("#tan2").addClass('d-none');
            $('#tan2-3').val('')
        });

        // 确认第二弹窗
        $('#tan2-but2').click(function () {
            var tans=$('#hao').val();
            var tans2= $('#tan2-3').val();
            var aa= /^1[3|5|6|7|8|9][0-9]{9}$/;
            if(aa.test(tans2)){
                if(tans===tans2){
                    $('#tan3').removeClass('d-none')
                }else{
                    window.location.href="index3.html"
                }
            }else{
                $("#ts1-2").removeClass('d-none');

            }

        });

        // 第三弹窗
    $('#tan3-but1').click(function () {
        $('#tan3').addClass('d-none');
        $('#tan2').removeClass('d-none')
    });

    $('#tan3-but2').click(function () {
        window.location.href="index2.html"
    })


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
