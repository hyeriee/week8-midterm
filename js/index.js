$(document).ready(function(){
            
            $("#img11").show();
            $("#img1").hide();
            $("#img2").hide();
            $("#img3").hide();
            $("#img4").hide();
            $("#img5").hide();
            $("#img6").hide();
            $("#img7").hide();
            $("#img8").hide();
            $("#img9").hide();
            $("#img10").hide();

 
           
            $("#img11").click(function(){
                $("#img11").hide();
                $("#img1").show();
            });
 
           
            $("#img1").click(function(){
                $("#img4").show();
                $("#img1").hide();
            });

            $("#img4").click(function(){
                $("#img3").show();
                $("#img4").hide();
            });

            $("#img3").click(function(){
                $("#img2").show();
                $("#img3").hide();
            });

            $("#img2").click(function(){
                $("#img5").show();
                $("#img2").hide();
            });

            $("#img5").click(function(){
                $("#img9").show();
                $("#img5").hide();
            });

            $("#img9").click(function(){
                $("#img7").show();
                $("#img9").hide();
            });

            $("#img7").click(function(){
                $("#img8").show();
                $("#img7").hide();
            });

            $("#img8").click(function(){
                $("#img6").show();
                $("#img8").hide();
            });

            $("#img6").click(function(){
                $("#img10").show();
                $("#img6").hide();
            });
        });