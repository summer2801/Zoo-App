// User Interface Logic
$(document).ready(function() {
    
    // Safety Form 
    $("#formOne").submit(function (event){

        const height = $("input#user-height").val();
        if (height <= 155 && height >= 138 ) {
            $(".displayOne").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayTwo").hide();
            $(".displayThree").hide();
            $(".displayFour").hide();
            $(".displayFive").hide();
            $(".displaySix").hide();
            $(".displaySix").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".galleryOne").addClass("highlight");
                $(".gallerySix").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayTwo").show();
                $(".displayThree").show();
                $(".displayFour").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".safe").show();
                $(".warnThree").hide();
            });

        } else if (height <= 137 && height >= 128) {
            $(".displayTwo").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayThree").hide();
            $(".displayFour").hide();
            $(".displayFive").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".gallerySix").addClass("highlight");
                $(".allowed").removeClass("highlight");
                $(".galleryOne").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayOne").show();
                $(".displayThree").show();
                $(".displayFour").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".warnThree").hide();
                $(".safe").show();
        });

        } else if (height <= 127 && height >= 98) {
            $(".displayThree").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayTwo").hide();
            $(".displayFour").hide();
            $(".displayFive").hide();
            $(".displaySix").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".galleryThree").addClass("highlight");
                $(".gallerySix").removeClass("highlight");
                $(".galleryOne").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayOne").show();
                $(".displayTwo").show();
                $(".displayFour").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".warn").hide(); 
                $(".warnTwo").hide(); 
                $(".warnThree").hide();
                $(".safe").show();
            });

        } else if (height <= 97 && height >= 83) {
            $(".displayFour").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayTwo").hide();
            $(".displayThree").hide();
            $(".displayFive").hide();
            $(".displaySix").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".galleryFour").addClass("highlight");
                $(".gallerySix").removeClass("highlight");
                $(".galleryOne").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayOne").show();
                $(".displayTwo").show();
                $(".displayThree").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".warnThree").hide();
                $(".safe").show();
            });

        } else if (height <= 83 && height >= 75) {
            $(".displayFive").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayTwo").hide();
            $(".displayThree").hide();
            $(".displayFour").hide();
            $(".displaySix").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".galleryFive").addClass("highlight");
                $(".gallerySix").removeClass("highlight");
                $(".galleryOne").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".displayOne").show();
                $(".displayTwo").show();
                $(".displayThree").show();
                $(".displayFour").show();
                $(".displaySix").hide();
                $(".warnThree").hide();
                $(".safe").show();
            });

        } else if (height <= 74 ) {
            $(".warnTwo").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayTwo").hide();
            $(".displayThree").hide();
            $(".displayFour").hide();
            $(".displayFive").hide();
            $(".displaySix").hide();
            $(".safe").hide();
            $(".warn").hide(); 
            $(".warnThree").hide();
            $(".view").click(function() {
                $(".gallerySix").removeClass("highlight");
                $(".galleryOne").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayOne").show();
                $(".displayTwo").show();
                $(".displayThree").show();
                $(".displayFour").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".warn").hide(); 
                $(".warnThree").hide();
                $(".safe").hide();
            });

        } else {
            $(".warn").show();
            $(".gallerySix").removeClass("highlight");
            $(".galleryOne").removeClass("highlight");
            $(".galleryTwo").removeClass("highlight");
            $(".galleryThree").removeClass("highlight");
            $(".galleryFour").removeClass("highlight");
            $(".galleryFive").removeClass("highlight");
            $(".displayOne").hide();
            $(".displayTwo").hide();
            $(".displayThree").hide();
            $(".displayFour").hide();
            $(".displayFive").hide();
            $(".displaySix").show();
            $(".safe").hide();
            $(".warnTwo").hide(); 
            $(".warnThree").show(); 
            $(".view").click(function() {
                $(".warn").show();
                $(".galleryOne").removeClass("highlight");
                $(".galleryTwo").removeClass("highlight");
                $(".galleryThree").removeClass("highlight");
                $(".galleryFour").removeClass("highlight");
                $(".galleryFive").removeClass("highlight");
                $(".displayOne").show();
                $(".displayTwo").show();
                $(".displayThree").show();
                $(".displayFour").show();
                $(".displayFive").show();
                $(".displaySix").hide();
                $(".warnTwo").hide();
                $(".warnThree").hide();
                $(".safe").hide();
            });
            
        }

        event.preventDefault();
    });

});
