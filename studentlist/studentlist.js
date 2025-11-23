

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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='http://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://web.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("linkedin").innerHTML='http://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://web.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://www.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='https://www.linkedin.com';
		document.getElementById("facebook").innerHTML='https://web.facebook.com';
		document.getElementById("indeed").innerHTML='https://profile.indeed.com';
		document.getElementById("github").innerHTML='https://github.com';
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
		document.getElementById("freelancer").innerHTML='https://www.freelancer.com';
		document.getElementById("linkedin").innerHTML='XXXXXX';
		document.getElementById("facebook").innerHTML='XXXXXX';
		document.getElementById("indeed").innerHTML='XXXXXX';
		document.getElementById("github").innerHTML='XXXXXX';
		document.getElementById("institute_name").innerHTML='Freedom IT Institutions';
	 }else{
	 	alert("Sorry Wrong Input. Please Try Again");
	 }
}
















