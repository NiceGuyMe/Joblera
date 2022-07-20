fetch('job.json')
 .then(function(response){
 return response.json();
 })
 .then(function(products){
 let placeholder = document.getElementById('para');
 let out ="";
 for(let product of products){
 out += `
 <section class="post-area section-gap">
 	<div class="container">
 		<div class="row justify-content-center d-flex">
 			<div class="col-lg-8 post-list">
 				<div class="single-post d-flex flex-row">
 					<div class="thumb">
 						<img src=${product.image} alt="">
 						<ul class="tags">
 							<li>
 								<a href="">${product.status}</a>
 							</li>
 						</ul>
 					</div>
 					<div class="details">
 						<div class="title d-flex flex-row justify-content-between">
 							<div class="titles">
 								<h4>${product.poste}</h4>
 								<h6>${product.society}</h6>
 							</div>
 						</div>
 						<p>${product.description}</p>
 						<h5>Job Nature: Full time</h5>
 						<p class="address"><span class="lnr lnr-map"></span> 56/8, Panthapath Dhanmondi Dhaka</p>
 						<p class="address"><span class="lnr lnr-database"></span> 15k - 25k</p>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 	<div class="col-lg-4 sidebar">
 	</div>
 </section>
 `;
 }
 placeholder.innerHTML = out;
 })
 .catch( error => console.log(error));
