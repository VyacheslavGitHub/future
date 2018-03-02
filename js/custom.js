$(document).ready(function(){
    
    $('.first').addClass('active');
    $('.color__sketch__item').on('click', function(e){
        var $this = $(this);
       $this
           .append('<div class="active"></div>')
           .siblings()
           .empty();
    });
    
});
