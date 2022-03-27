			//index///////////////////////////////
			function scroll(){
				scrollTo(0,0);
			}
			function mpmuncul(){
			document.getElementById("pimenu").style.display="inline";
			}
			function mphilang(){
			document.getElementById("pimenu").style.display="none";
			}
			function muncul(){
			document.getElementById("imenu").style.display="inline";
			}
			function hilang(){
			document.getElementById("imenu").style.display="none";
			}
			function pmuncul(){
			document.getElementById("kpict").style.display="inline";
			}
			function philang(){
			document.getElementById("kpict").style.display="none";
			}
			/////////////////////////////////////////////////
			function random(){
				var r=Math.random();
				if (r<0.33){red();}
				else if(r<0.66){blue();}
				else{green();}
			}
			function red(){
			document.body.style.background="url('gambar/bg/candy_red.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="gambar/logo/tenshikib.png";
			}
			function blue(){
			document.body.style.background="url('gambar/bg/apple_vector.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="gambar/logo/tenshikig.png";
			}
			function green(){
			document.body.style.background="url('gambar/bg/green.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="gambar/logo/tenshikir.png";
			}
			///////////////////////////////////////////////
			function random2(){
				var r=Math.random();
				if (r<0.33){red2();}
				else if(r<0.66){blue2();}
				else{green2();}
			}
			function red2(){
			document.body.style.background="url('../gambar/bg/candy_red.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="../gambar/logo/tenshikib.png";
			}
			function blue2(){
			document.body.style.background="url('../gambar/bg/apple_vector.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="../gambar/logo/tenshikig.png";
			}
			function green2(){
			document.body.style.background="url('../gambar/bg/green.jpg')";
			document.body.style.backgroundAttachment="fixed";
			document.getElementById("tenshiki").src="../gambar/logo/tenshikir.png";
			}
			/////////////////////////////////////////////
			function inama(){
				var loop;
				do{
					var nama=window.prompt("Siapakah Anda ?");
					if(nama.length>9){
						window.alert("maaf, maksimal 9 huruf ^_^)v");
						loop=1;
					}
					else if(nama.length==0){
						window.alert("Tak kenal maka tak sayang ^_^)b");
						loop=1;
					}
					else{
						window.alert("Selamat Datang, "+nama+" ! \(^_^)/");
						document.getElementById("inama").innerHTML=nama;
						loop=0;
					}
				}while(loop==1);
			}
			//tengah////////////////////////////////////
			function h1muncul(){
			document.getElementById("html1").style.display="inline";
			}
			function h1hilang(){
			document.getElementById("html1").style.display="none";
			}
			function h2muncul(){
			document.getElementById("html2").style.display="inline";
			}
			function h2hilang(){
			document.getElementById("html2").style.display="none";
			}
			function h3muncul(){
			document.getElementById("html3").style.display="inline";
			}
			function h3hilang(){
			document.getElementById("html3").style.display="none";
			}
			///////////////////////////////////////////
			function waktu() { 
			var jam = new Date();
			setTimeout("waktu()",1000);
			var j=jam.getHours()+"";var m=jam.getMinutes()+"";var s=jam.getSeconds()+"";
			document.getElementById("jam").innerHTML = ".:: "+(j.length==1?"0"+j:j)+":"+(m.length==1?"0"+m:m)+":"+(s.length==1?"0"+s:s)+" ::."; 
			}
			function sapa(){
				var sel = new Date();
				var la = sel.getHours();
				if(la<11) alert("Selamat Pagi ^o^)/");
				else if(la<15) alert("Selamat Siang ^_^)7");
				else if(la<17) alert("Selamat Sore ^.^)9");
				else alert("Selamat Malam -o0)~");
			}
			function tanggal(){
			var tang = new Date();
			setTimeout("tanggal()",1000);
			var bul= tang.getMonth();
			if(bul==0)var lan="Januari";
			else if(bul==1)var lan="Februari";
			else if(bul==2)var lan="Maret";
			else if(bul==3)var lan="April";
			else if(bul==4)var lan="Mei";
			else if(bul==5)var lan="Juni";
			else if(bul==6)var lan="Juli";
			else if(bul==7)var lan="Agustus";
			else if(bul==8)var lan="September";
			else if(bul==9)var lan="Oktober";
			else if(bul==10)var lan="November";
			else var lan="Desember";
			document.getElementById("tanggal").innerHTML = ".:: "+tang.getDate()+" "+lan+" "+tang.getFullYear()+" ::.";
			}
			function email(){
				var em= document.getElementById("email").value;
				if(em.indexOf("@")<0 || em.indexOf(".")<0) window.alert("Maaf, alamat Email anda salah ^_^)v");
				else {
				window.alert("Data yang anda masukkan sudah Benar ^o^)9");
				document.getElementById("submit").style.display="inline";
				}
			}
			