// Scripts for URBANK application.

$(function(){

	function parseRates(){
		$.getJSON("http://preview.hellomrdavis.com/challenge/code-test.json", function(data){
			var rates = [];
			$.each(data, function(index,value){
				var earnings = parseFloat(value.earnings);
				rates.push('<div class="rates-table-row"><div class="rates-table-col1">'+value.name+'</div><div class="rates-table-col2">'+value.apy+'</div><div class="rates-table-col3">'+earnings.toFixed(2)+'</div></div>');
			});
			$('#rates-table-content').html(rates);
		});
	}

	parseRates(); // Run function to parse JSON file and display content.

	$('#news').tabs(); // Initiate news tabs sidebar.

	// Login modal box.
	$('a.login-open').on({
		click:function(e){
			e.preventDefault();
			$("body").append('<div class="modal-overlay"></div>');
			$('.modal-overlay').fadeTo(500, 1.0);
			var modal = $(this).attr("data-modal");
			$('#'+modal).fadeTo(500,1.0);
		}
	});

	$(".modal-close, .modal-overlay").on({
		click:function(e){
			e.preventDefault();
			$(".modal, .modal-overlay").fadeOut(500, function() {
			   $(".modal-overlay").remove();
			});
		}
	});


	$(window).resize(function() {
	  $(".modal").css({
	    top: ($(window).height() - $(".modal").outerHeight()) / 2,
	    left: ($(window).width() - $(".modal").outerWidth()) / 2
	  });
	});

	$(window).resize();
});