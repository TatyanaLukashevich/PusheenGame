$(function() {
	var valueNumber = $('.now-progress').text();
	var value = $('.progress.percent').width();
	var valueMaxNumber = $('.level-max').text();
	var difference = 1;
	var img = $('.cat-img');
	 
	setInterval(function() {
		
		if (value >= 0) {
			value -= value/valueNumber;
			valueNumber -= difference;

			if (valueNumber == 0){
				$('.cat-img').attr("src", "design/img/thumb.gif");
				return;
			} 

			$('.progress.percent').width(value);
			$('.now-progress').text(valueNumber); 	

			if (valueNumber == valueMaxNumber*0.3) {
				$('.cat-img').attr("src", "design/img/Anger.gif");
				return;
			} 
			if (valueNumber == valueMaxNumber*0.6) {
				$('.cat-img').attr("src", "design/img/sadness.gif");
				return;
			}	
		}
	}, 300);
});