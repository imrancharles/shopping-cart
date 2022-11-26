/*
     Nike Card Slider 

     inspired by my brother https://dribbble.com/shots/2434589-Day-58-Shopping-Cart
     made by: Philip Stapelfeldt
     website: http://www.capshake.com
     
     copyright: images and logos are copyrighted by nike
*/
$(function () {
    var slider = '.content__slider';
    var sliderOuter = '.content__sliderWrapper';

    var sliderItem = '.content__sliderItem';
    var sliderItemOuter = '.content__sliderItemOuter';

    var sliderNext = '.content__sliderNext';
    var sliderPrev = '.content__sliderPrev';


    // set width and height
    $(window).on('load resize', function () {
        $(sliderItemOuter).width($(window).width());
        $(sliderOuter).width($(window).width()).height($(sliderItem).height());
        $(slider).width($(window).width() * $(sliderItemOuter).length);
    });


    // next button
    $(sliderNext).on('click', function (e) {

        // index of slide
        var slideIndex = $(e.currentTarget).parents(sliderItemOuter).index() + 1;

			  // check end
        if ((slideIndex) < $(sliderItemOuter).length) {
            $(slider).css({
                'transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)',
                '-webkit-transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)'
            });
        }
    });
    
    // previous button
    $(sliderPrev).on('click', function (e) {

        // index of slide
        var slideIndex = $(e.currentTarget).parents(sliderItemOuter).index() - 1;

				// check start
        if (slideIndex > -1) {
            $(slider).css({
                'transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)',
                '-webkit-transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)'
            });
        }
    });
});