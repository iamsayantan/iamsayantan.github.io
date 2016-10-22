$(function(){

	/* Select the screenshot image and attach an event handler */
	$(".project-screenshot img").click(function(){

		/* Copy the source attribute of the image to a variable */
		var src = $(this).attr("src");

		/* Attach the the source of the image to the src attribute of the
			img element of the frame
		 */
		$(".image-frame img").attr("src", src);

		/* fade in the overlay and the frame */
		$(".image-frame").fadeIn('slow');
		$(".image-overlay").fadeIn('slow');

	});

	/* attach an event handler to the overlay and when it is clicked 
		fadeout the overlay and the image
	 */
	$(".image-overlay").click(function(){
		$(this).fadeOut();
		$(".image-frame").fadeOut();
	});

});