function valyuta(code)
{
	let a = axios.get(`https://cors.io/?https://valyuta.com/api/get_rate_current_all/${code}/AZN`)
	 .then(res=>{ 	
	 	
	 	return {
	 		result:res.data[0].result,
	 		date:res.data[0].date
	 	};

	 });

	 return a;
}

let USDResult = valyuta('USD');
let EURResult = valyuta('EUR');
let RUBResult = valyuta('RUB');
let GBPResult = valyuta('GBP');
let AEDResult = valyuta('AED');

Promise.all([USDResult,EURResult,RUBResult,GBPResult,AEDResult]).then(val=>{
	
	let newDateFormat = val[0].date.split('-').reverse().join('.');
	let xeberElement = document.querySelector('.xeber');
	xeberElement.innerHTML = `

		<table width="100%" height="35" border="0" cellpadding="0" cellspacing="0" align="center">
<tr>
	<td width="100"><div class="hd"><span >${newDateFormat}</span></div></td>
    <td>
		<div class="news" style="width: 700px;"> 
			<marquee onmouseout="this.setAttribute('scrollamount', 5, 0);" onmouseover="this.setAttribute('scrollamount', 1, 0);">
  
											<b>1 DOLLAR</b> ${val[0].result} AZN   |  
											<b>1 RUBL</b> ${val[2].result} AZN  |  
											<b>1 AVRO</b> ${val[1].result} AZN  |  
											<b>1 B&#399;&#399; D&#304;RH&#399;M&#304;</b> ${val[4].result} AZN   |  
											<b>1 FUNT STERL&#304;NQ</b> ${val[3].result}  
			

									
			
			</marquee>
		</div>
	</td>
    <td width="60"><div class="play"></div></td>
    
</tr>
</table>



	`

});