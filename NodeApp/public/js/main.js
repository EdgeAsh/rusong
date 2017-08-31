$(document).ready(function(){
			var swiper = new Swiper('.swiper-container',{
				pagination:'.swiper-pagination',
				loop:true,
				autoplay:true,
				speed: 2000,
				autoplayDisableOnInteraction:false
			});
			// 时间设置
			$('#time').html((new Date()).getFullYear())
			// 导航动画
			$("#menu,#btn-up").on('click',function(){
				$('.nav').slideToggle()
			})
			// 底部弹出
			$('#btn-cross,.bg-plus').on('click',function(){
				$('.bg-plus,.plusbox').fadeToggle()
				var btc = $('#btn-cross>.iconfont')
				btc.hasClass("rotate")? btc.css("transform","rotate(0deg)").removeClass('rotate'): btc.css("transform","rotate(-180deg)").addClass('rotate');
			});
		});