

document.write("<div class='main-area'>");

	document.write("<input type='text' name='input' id='input'>");
	document.write("<input type='submit' name='submit' id='submit' onclick='checkinput()'>");
	document.write("<input type='button' name='refresh' id='refresh' value='Refresh' onclick='refreshData()'>");


	document.write("<table class='t-design' border='2' cellpadding='50'>");
		document.write("<tr>");
			document.write("<th>Roll</th>");
			document.write("<th>Name</th>");
			document.write("<th>Batch</th>");
			document.write("<th>Group</th>");
			document.write("<th>Course</th>");
			document.write("<th>ID</th>");
			document.write("<th>E-mail</th>");
		document.write("</tr>");

		document.write("<tr>");
			document.write("<td id='roll'></td>");
			document.write("<td id='name'></td>");
			document.write("<td id='batch'></td>");
			document.write("<td id='group'></td>");
			document.write("<td id='course'></td>");
			document.write("<td id='id'></td>");
			document.write("<td id='e-mail'></td>");
		document.write("</tr>");

		document.write("<tr>");
			document.write("<th>Phone</th>");
			document.write("<th>Freelancer</th>");
			document.write("<th>Linkedin</th>");
			document.write("<th>Facebook</th>");
			document.write("<th>Indeed</th>");
			document.write("<th>Github</th>");
			document.write("<th>Institute Name</th>");
		document.write("</tr>");



		document.write("<tr>");
			document.write("<td id='phone'></td>");
			document.write("<td id='freelancer'></td>");
			document.write("<td id='linkedin'></td>");
			document.write("<td id='facebook'></td>");
			document.write("<td id='indeed'></td>");
			document.write("<td id='github'></td>");
			document.write("<td id='institute_name'></td>");
		document.write("</tr>");

	document.write("</table>");
document.write("</div>");

function refreshData() {
    const ids = ["roll","name","batch","group","course","id","e-mail",
                 "phone","freelancer","linkedin","facebook","indeed","github","institute_name"];
    
    ids.forEach(function(id){
        const cell = document.getElementById(id);
        if(cell) cell.innerHTML = "";
    });

    const inputField = document.getElementById("input");
    if(inputField) inputField.value = "";
}

function checkinput(){
	var input = document.getElementById("input").value

	if(input==17){
		document.getElementById("roll").innerHTML='17';
		document.getElementById("name").innerHTML='Md. Zahidul Islam';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1517';
		document.getElementById("e-mail").innerHTML='webmasterzahid@gmail.com';
		document.getElementById("phone").innerHTML='+8801727186838';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/zahidwebmaster';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/zahidbarguna/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/Zahid.Barguna';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/48htyfb';
		document.getElementById("github").innerHTML='Web Design & Development';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	}
	 else if(input == 46){
	 	document.getElementById("roll").innerHTML='46';
		document.getElementById("name").innerHTML='Md. Irtajul Akhter Khan';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1546';
		document.getElementById("e-mail").innerHTML='irtajul2016@gmail.com';
		document.getElementById("phone").innerHTML='+8801712727808';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devirtajul';
		document.getElementById("linkedin").innerHTML='http://www.linkedin.com/in/devirtajul';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/irtajulakhter.khan/';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/48htyfb';
		document.getElementById("github").innerHTML='https://github.com/Irtajul';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 47){
	 	document.getElementById("roll").innerHTML='47';
		document.getElementById("name").innerHTML='Md Alamgir Hossain Mojumder';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1547';
		document.getElementById("e-mail").innerHTML='-';
		document.getElementById("phone").innerHTML='+8801711788519';
		document.getElementById("freelancer").innerHTML='';
		document.getElementById("linkedin").innerHTML='';
		document.getElementById("facebook").innerHTML='';
		document.getElementById("indeed").innerHTML='';
		document.getElementById("github").innerHTML='';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 48){
	 	document.getElementById("roll").innerHTML='48';
		document.getElementById("name").innerHTML='Kazi Sadikuzzaman ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1548';
		document.getElementById("e-mail").innerHTML='sadiqkpur@gmail.com';
		document.getElementById("phone").innerHTML='+8801912075209';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devsadiq?sb=t';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/kazi-sadikuzzaman-114005b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9YjbGjUfQbOzaW21SEeJwQ%3D%3D';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/share/1BgLGhTsHd/';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/kazis-0f3llnv';
		document.getElementById("github").innerHTML='https://github.com/KaziSadikuzzaman';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	else if(input == 49){
	 	document.getElementById("roll").innerHTML='49';
		document.getElementById("name").innerHTML='Arju Moni Akter';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1549';
		document.getElementById("e-mail").innerHTML='aarjumoniakter@gmail.com';
		document.getElementById("phone").innerHTML='+8801887355271';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/arjumoni33';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/devarjumaniakter/';
		document.getElementById("facebook").innerHTML='https://web.facebook.com/arju.moni.176276';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage';
		document.getElementById("github").innerHTML='https://github.com/arjumani87';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 50){
	 	document.getElementById("roll").innerHTML='50';
		document.getElementById("name").innerHTML='Md Rofiqul Islam';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1550';
		document.getElementById("e-mail").innerHTML='mdrofiqulislamkhan84@gmail.com';
		document.getElementById("phone").innerHTML='+8801713902316';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devrofiq';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/devrofiq/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/share/1ANErWsupc/?mibextid=wwXIfr';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend';
		document.getElementById("github").innerHTML='https://github.com/DevRofiq';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 51){
	 	document.getElementById("roll").innerHTML='51';
		document.getElementById("name").innerHTML='Md. Zahedul Islam';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1551';
		document.getElementById("e-mail").innerHTML='pustan22@gmail.com';
		document.getElementById("phone").innerHTML='+8801713-041807 | +8801718-626813';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devzahid75';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/devzahid75/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/mrzahid1975';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/zaheduli-zblmg19';
		document.getElementById("github").innerHTML='https://github.com/zahid1975';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 52){
	 	document.getElementById("roll").innerHTML='52';
		document.getElementById("name").innerHTML='Sushanta Paul';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1552';
		document.getElementById("e-mail").innerHTML='sushanta7907@gmail.com';
		document.getElementById("phone").innerHTML='+8801711187907';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/sushantap79';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/sushanta-paul-01307057/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/sushanta';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/h2h0tb4';
		document.getElementById("github").innerHTML='https://github.com/sushanta2311';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 53){
	 	document.getElementById("roll").innerHTML='53';
		document.getElementById("name").innerHTML='XXXXXX ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1553';
		document.getElementById("e-mail").innerHTML='XXXXXX';
		document.getElementById("phone").innerHTML='XXXXXX';
		document.getElementById("freelancer").innerHTML='XXXXXX';
		document.getElementById("linkedin").innerHTML='XXXXXX';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='XXXXXX';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 54){
	 	document.getElementById("roll").innerHTML='54';
		document.getElementById("name").innerHTML='Kazi Mukitul Islam ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1554';
		document.getElementById("e-mail").innerHTML='mukitul2k9@gmail.com';
		document.getElementById("phone").innerHTML='+8801709990001';
		document.getElementById("freelancer").innerHTML='XXXXXX';
		document.getElementById("linkedin").innerHTML='http://www.linkedin.com/in/devkazi';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/DevKazi2k80';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/96d5395';
		document.getElementById("github").innerHTML='https://github.com/DevKazi';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 55){
	 	document.getElementById("roll").innerHTML='55';
		document.getElementById("name").innerHTML='XXXXXX ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1555';
		document.getElementById("e-mail").innerHTML='XXXXXX';
		document.getElementById("phone").innerHTML='XXXXXX';
		document.getElementById("freelancer").innerHTML='XXXXXX';
		document.getElementById("linkedin").innerHTML='XXXXXX';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='XXXXXX';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 56){
	 	document.getElementById("roll").innerHTML='56';
		document.getElementById("name").innerHTML='Mitu ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1556';
		document.getElementById("e-mail").innerHTML='mitu597772@gmail.com';
		document.getElementById("phone").innerHTML='+8801787597772';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com.bd/u/nurjahanm4';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/nurjahan247/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/nurjahan.mitu.870108';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/7b7yr0d';
		document.getElementById("github").innerHTML='https://github.com/devnurjahan';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 57){
	 	document.getElementById("roll").innerHTML='57';
		document.getElementById("name").innerHTML='Md. Lutful Haque pappana';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1557';
		document.getElementById("e-mail").innerHTML='joeardarlutfulpappana70@gmail,.com';
		document.getElementById("phone").innerHTML='+8801719731456';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devlutfulpapa?ngsw-bypass=';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/feed/';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/1nlj66t';
		document.getElementById("github").innerHTML='https://github.com/devlutfulpappana70';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 58){
	 	document.getElementById("roll").innerHTML='58';
		document.getElementById("name").innerHTML='Md. Murad Hossain ';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1558';
		document.getElementById("e-mail").innerHTML='muradhossen94848@gmail.com';
		document.getElementById("phone").innerHTML='+8801717479377';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/proseoex';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/murad-hossain1/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/muradhossain555/';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/h1nbmvf';
		document.getElementById("github").innerHTML='https://github.com/murad-hossain1';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 59){
	 	document.getElementById("roll").innerHTML='59';
		document.getElementById("name").innerHTML='MD. ABDUL MALEK';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1559';
		document.getElementById("e-mail").innerHTML='XXXXXX';
		document.getElementById("phone").innerHTML='+8801743711332';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com.bd/u/nurjahanm4';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/nurjahan247/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/nurjahan.mitu.870108';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/7b7yr0d';
		document.getElementById("github").innerHTML='https://github.com/devnurjahan';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 60){
	 	document.getElementById("roll").innerHTML='60';
		document.getElementById("name").innerHTML='Md. Sohel';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1560';
		document.getElementById("e-mail").innerHTML='mdsohel85625@gmail.com';
		document.getElementById("phone").innerHTML='+8801648837862';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com.bd/u/devsohel62';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/md-sohel-281b6038b/';
		document.getElementById("facebook").innerHTML='https://web.facebook.com/md.sohel.hossen.940559';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 61){
	 	document.getElementById("roll").innerHTML='61';
		document.getElementById("name").innerHTML='Md. Robiul Hossain';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1561';
		document.getElementById("e-mail").innerHTML='XXXXXX';
		document.getElementById("phone").innerHTML='+8801937944715';
		document.getElementById("freelancer").innerHTML='XXXXXX';
		document.getElementById("linkedin").innerHTML='XXXXXX';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='XXXXXX';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 62){
	 	document.getElementById("roll").innerHTML='62';
		document.getElementById("name").innerHTML='Md Sakibul Hasan';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1562';
		document.getElementById("e-mail").innerHTML='mnsakib.cse@gmail.com';
		document.getElementById("phone").innerHTML='+8801868991826';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devsakib69';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/devsakib/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/sakib.2660';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/xg7jnw7';
		document.getElementById("github").innerHTML='https://github.com/sakib69-web';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 63){
	 	document.getElementById("roll").innerHTML='63';
		document.getElementById("name").innerHTML='Rumana Afrose';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1563';
		document.getElementById("e-mail").innerHTML='rumanazara15@gmail.com';
		document.getElementById("phone").innerHTML='+8801306222124';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com.bd/u/devrumana';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/rumana-afrose-23ab4338b/';
		document.getElementById("facebook").innerHTML='https://www.facebook.com/Alhamdulillah4loveofAllah';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-notifcenter';
		document.getElementById("github").innerHTML='https://github.com/devrumana';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 64){
	 	document.getElementById("roll").innerHTML='64';
		document.getElementById("name").innerHTML=' Md. Sifatullah';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1564';
		document.getElementById("e-mail").innerHTML='sifatullah25494039@gmail.com';
		document.getElementById("phone").innerHTML='+8801325494039';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/devmdsifat25';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com/in/md-sifat-ullah-1aa4b7390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
		document.getElementById("facebook").innerHTML='https://web.facebook.com/asmaulhossain.sifat/';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com/p/s84sgmn';
		document.getElementById("github").innerHTML='https://github.com/devsifatullah';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }
	 else if(input == 65){
	 	document.getElementById("roll").innerHTML='65';
		document.getElementById("name").innerHTML='Mitun Das';
		document.getElementById("batch").innerHTML='WDD 15';
		document.getElementById("group").innerHTML='4';
		document.getElementById("course").innerHTML='Web Design & Development';
		document.getElementById("id").innerHTML='FIT-WDD-1565';
		document.getElementById("e-mail").innerHTML='sumonhello87@gmail.com';
		document.getElementById("phone").innerHTML='+8801765286909';
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com/u/innovativet8';
		document.getElementById("linkedin").innerHTML='XXXXXX';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='XXXXXX';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }else{
	 	alert("Sorry Wrong Input. Please Try Again");
	 }
}















