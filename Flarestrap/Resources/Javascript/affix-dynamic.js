    $(function(){
 
    var stickyElement = '.bs-docs-sidebar', 
    bottomElement = '.footer'; 
    
    if($( stickyElement ).length){
    $( stickyElement ).each(function(){
   
    var fromTop = $( this ).offset().top,
   
    fromBottom = $( document ).height()-($( this ).offset().top + $( this ).outerHeight()),
    
    stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());
    
    if( (fromBottom-stopOn) > 200 ){
    
    $( this ).css('width', $( this ).width()).css('top', 0).css('position', '');
    
    $( this ).affix({
    offset: {
    
    top: fromTop,
    
    bottom: stopOn
    }
    
    }).on('affix.bs.affix', function(){ $( this ).css('top', 60).css('position', ''); });
    }
    
    $( window ).trigger('scroll');
    });
    }
    });