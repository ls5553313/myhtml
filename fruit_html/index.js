// index.js


$(function(){
	// head city change
	$select = $('#select>li');
	for(i=0;i<$select.length;i++){
		$($select[i]).click(function(){
			$('#leftCity>a').html(this.innerText);
		});
	};

	// banner change and foot index change
	$banners = $('#banner>img');
	var bannerIndex = 0;
	$footIndex = $('#banner>#bannerIndex>li')
	var timer; 
	timer = setInterval(bannerChange,1000);
	function bannerChange(){
		$banners[bannerIndex].style.display = 'none';
		bannerIndex +=1;
		console.log($banners[bannerIndex],bannerIndex)
		if (bannerIndex==$banners.length){
			bannerIndex = 0
		};
		for(j=0;j<$footIndex.length;j++){
			$footIndex[j].style.backgroundColor = 'grey';
		}
		$banners[bannerIndex].style.display = 'block';
		$footIndex[bannerIndex].style.backgroundColor = 'red';
		console.log($banners[bannerIndex],bannerIndex);
	};

	// stop banner and continue
	$('#banner').mouseover(function(){
		clearInterval(timer)
	});

	$('#banner').mouseout(function(){
		timer = setInterval(bannerChange,1000)
	});

});
