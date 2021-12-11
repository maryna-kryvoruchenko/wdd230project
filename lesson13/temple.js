//Temple API  
async function showTemple() {
    let data = null;
    try {
      const response = await fetch('https://nathan-byui-api.herokuapp.com/temples', {
        headers: {
          "apiKey": 'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N' 
        }
      })
      data = await response.json();
      data.forEach(item => {
        if (item.name == "Oakland California Temple" || item.name == "Dallas Texas Temple" || item.name == "Rexburg Idaho Temple" || item.name == "Salt Lake Temple") {
          let card = document.createElement('a');
          card.className = "temple_sections";
          if (item.name == "Oakland California Temple") {
            card.href = "oakland-weather.html";
          } else if (item.name == "Dallas Texas Temple") {
            card.href = "dallas-weather.html";
          } else if (item.name == "Rexburg Idaho Temple") {
            card.href = "rexburg-weather.html";
          } else {
            card.href = 'saltLake-weather.html';
          }
          
            let h2 = document.createElement('h2');
            h2.className = "temple_names";
            h2.textContent = item.name;
            card.appendChild(h2);
            document.querySelector('#temple').appendChild(card);

            let p = document.createElement('p');
            p.className = "temple_description";
            p.textContent = item.location;
            card.appendChild(p);
            document.querySelector('#temple').appendChild(card);

            let p2 = document.createElement('p');
            p2.className = "temple_description";
            p2.textContent = 'Dedicated: ' + item.dedicated;
            card.appendChild(p2);
            document.querySelector('#temple').appendChild(card);
        console.log(item.name)
        }      
     }) 
    }
    catch {
      console.log(error);
    }
    console.log(data)
    
    
  }
  
  showTemple();