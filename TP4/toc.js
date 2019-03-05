function toc(){
	// I CAPTURE THE LIST OF LEVEL-1-HEADINGS
	H1s = document.getElementsByTagName("h1");
	// THEN I CREATE A TABLE ELEMENT
	table_of_content = document.createElement("table");
	// I CREATE A CAPTION FOR THE TABLE ELEMENT
	caption = table_of_content.createCaption();
	caption.innerHTML = "Table Of Content";
	// I CAPTURE THE LENGTH OF THE LIST OF LEVEL-1-HEADINGS
	nb_H1 = H1s.length;
	// I LOOP THROUGH THE LIST OF LEVEL-1-HEADINGS
	for(var i = 0; i < nb_H1; i++){
		// FOR EACH H1 ELEMENT, i CREATE A TABLE ROW AND TWO TABLE-ROW CELLS
		row = document.createElement('tr');
		id = document.createElement('td');
		title = document.createElement('td');
		// I ASSIGN VALUE TO EACH TABLE CELL
		id.innerHTML = i + " - ";
		title.innerHTML = H1s[i].innerHTML;
		// I ADD THE TABLE CELLS TO THE ROW
		row.appendChild(id);
		row.appendChild(title);
		// I ADD THE ROW TO THE TABLE
		table_of_content.appendChild(row);
	}
	// I ADD THE TABLE TO THE BODY ELEMENT OF THE HTML DOCUMENT
	body = document.getElementsByTagName('body')[0];
	body.insertBefore(table_of_content, body.firstChild);
}

function linked_toc(){
	// I CAPTURE THE LIST OF LEVEL-1-HEADINGS
	H1s = document.getElementsByTagName("h1");
	// THEN I CREATE A TABLE ELEMENT
	table_of_content = document.createElement("table");
	// I CREATE A CAPTION FOR THE TABLE ELEMENT
	caption = table_of_content.createCaption();
	caption.innerHTML = "Table Of Content";
	// I CAPTURE THE LENGTH OF THE LIST OF LEVEL-1-HEADINGS
	nb_H1 = H1s.length;
	// I LOOP THROUGH THE LIST OF LEVEL-1-HEADINGS
	for(var i = 0; i < nb_H1; i++){
		// SETTING IDs FOR EACH HEADING ELEMENT EXCEPT FOR THE LAST ONE (Conclusion)
		if(H1s[i].innerHTML !== "Conclusion"){
			H1s[i].id = i + "-h1";
		}
		// FOR EACH H1 ELEMENT, i CREATE A TABLE ROW AND TWO TABLE-ROW CELLS
		row = document.createElement('tr');
		id = document.createElement('td');
		title = document.createElement('td');
		// I ASSIGN VALUE TO EACH TABLE CELL
		id.innerHTML = i + " - ";
		link = document.createElement('a');
		link.href = "#"+H1s[i].id;
		link.innerHTML = H1s[i].innerHTML;
		title.appendChild(link);
		// I ADD THE TABLE CELLS TO THE ROW
		row.appendChild(id);
		row.appendChild(title);
		// I ADD THE ROW TO THE TABLE
		table_of_content.appendChild(row);
	}
	// I ADD THE TABLE TO THE BODY ELEMENT OF THE HTML DOCUMENT
	body = document.getElementsByTagName('body')[0];
	body.insertBefore(table_of_content, body.firstChild);
}

function styled_linked_toc(){
	// I CAPTURE THE LIST OF LEVEL-1-HEADINGS
	H1s = document.getElementsByTagName("h1");
	// THEN I CREATE A TABLE ELEMENT
	table_of_content = document.createElement("table");
	// I CREATE A CAPTION FOR THE TABLE ELEMENT
	caption = table_of_content.createCaption();
	caption.innerHTML = "Table Of Content";
	// I CAPTURE THE LENGTH OF THE LIST OF LEVEL-1-HEADINGS
	nb_H1 = H1s.length;
	// I LOOP THROUGH THE LIST OF LEVEL-1-HEADINGS
	for(var i = 0; i < nb_H1; i++){
		// SETTING IDs FOR EACH HEADING ELEMENT EXCEPT FOR THE LAST ONE (Conclusion)
		if(H1s[i].innerHTML !== "Conclusion"){
			H1s[i].id = i + "-h1";
		}
		// ADD EVENT LISTENER TO EACH HEADING ELEMENT
		// I USED THE ES6 FUNCTION CALL
		H1s[i].onmouseover = function(){
			this.style.color = 'red';
		};
		H1s[i].onmouseout = function(){
			this.style.color = 'initial';
		};
		// FOR EACH H1 ELEMENT, i CREATE A TABLE ROW AND TWO TABLE-ROW CELLS
		row = document.createElement('tr');
		id = document.createElement('td');
		title = document.createElement('td');
		// I ASSIGN VALUE TO EACH TABLE CELL
		id.innerHTML = i + " - ";
		link = document.createElement('a');
		link.href = "#"+H1s[i].id;
		link.innerHTML = H1s[i].innerHTML;
		title.appendChild(link);
		// I ADD THE TABLE CELLS TO THE ROW
		row.appendChild(id);
		row.appendChild(title);
		// I ADD THE ROW TO THE TABLE
		table_of_content.appendChild(row);
	}
	// I ADD THE TABLE TO THE BODY ELEMENT OF THE HTML DOCUMENT
	body = document.getElementsByTagName('body')[0];
	body.insertBefore(table_of_content, body.firstChild);
}

function extended_styled_linked_toc(){
	// I CAPTURE THE LIST OF LEVEL-1-HEADINGS
	H1s = document.getElementsByTagName("h1");
	// THEN I CREATE A TABLE ELEMENT
	table_of_content = document.createElement("table");
	// I CREATE A CAPTION FOR THE TABLE ELEMENT
	caption = table_of_content.createCaption();
	caption.innerHTML = "Table Of Content";
	// I CAPTURE THE LENGTH OF THE LIST OF LEVEL-1-HEADINGS
	nb_H1 = H1s.length;
	// I LOOP THROUGH THE LIST OF LEVEL-1-HEADINGS
	for(var i = 0; i < nb_H1; i++){
		// SETTING IDs FOR EACH HEADING ELEMENT EXCEPT FOR THE LAST ONE (Conclusion)
		if(H1s[i].innerHTML !== "Conclusion"){
			H1s[i].id = i + "-h1";
		}
		// ADD EVENT LISTENER TO EACH HEADING ELEMENT
		// I USED THE ES6 FUNCTION CALL
		H1s[i].onmouseover = function(){
			this.style.color = 'red';
		};
		H1s[i].onmouseout = function(){
			this.style.color = 'initial';
		};
		// FOR EACH H1 ELEMENT, i CREATE A TABLE ROW AND TWO TABLE-ROW CELLS
		row = document.createElement('tr');
		id = document.createElement('td');
		title = document.createElement('td');
		// I ASSIGN VALUE TO EACH TABLE CELL
		id.innerHTML = i + " - ";
		link = document.createElement('a');
		link.href = "#"+H1s[i].id;
		link.innerHTML = H1s[i].innerHTML;
		title.appendChild(link);
		// I ADD THE TABLE CELLS TO THE ROW
		row.appendChild(id);
		row.appendChild(title);
		// I ADD THE ROW TO THE TABLE
		table_of_content.appendChild(row);
	}
	// I ADD THE TABLE TO THE BODY ELEMENT OF THE HTML DOCUMENT
	body = document.getElementsByTagName('body')[0];
	body.insertBefore(table_of_content, body.firstChild);
}