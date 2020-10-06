

let urlTest = 'https://calendarific.com/api/v2/holidays?api_key=310c0f78e46bddade30ed287ad0186e7b7652045&country=US&year=2020&month=1';
    fetch(urlTest) 
        .then(results => {
            
            return results.json() 
        })
        .then(json => {
            
            displayData(json);
        });
  function displayData(json) {
    //console.log('Display:', json);
  };

  const baseURL = 'https://calendarific.com/api/v2/holidays?api_key=310c0f78e46bddade30ed287ad0186e7b7652045&country=US'
  let url; //3
  
  //SEARCH FORM
  const month = document.querySelector('.month');
  const year = document.querySelector('.year');
  const searchForm = document.querySelector('form');
  const submitBtn = document.querySelector('.submit');
  
  //TEST


  //RESULTS SECTION
  const section = document.querySelector('section');

  
  searchForm.addEventListener('submit', fetchResults);
  
  
  
  function fetchResults(e) {
      e.preventDefault();
      
      url = baseURL + '&year=' + year.value + '&month=' + month.value;
      //console.log("URL:", );
      
      fetch(url)
      .then(function(result) {
          //console.log(result)
          return result.json();
      }).then(function(json) {
          //console.log(json);
      })
  
      fetch(url).then(function(result) {
          return result.json();
      }).then(function(json) {
          displayResults(json);
      })
  }
  

  function displayResults(json) {

  
  let holiday = json.response.holidays;
  while (section.firstChild) {
    section.removeChild(section.firstChild);
    }
  
      if(holiday.length === 0) {
          console.log("No results");
      } else {
          for(let i = 0; i < holiday.length; i++) {
            let holidayInfo = document.createElement('article');
            let heading = document.createElement('h2');
            let date = document.createElement('h3');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            
        

            let current = holiday[i];
            console.log("Holidays:", current);

            let isoDay = current.date.datetime.day;
            let isoMonth = current.date.datetime.month;
            let isoYear = current.date.datetime.year;
            let isoDate = current.date.iso;


            var  months = ["0", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var monthName=months[isoMonth];
          
       
            var A = new Date(isoDate); 
            var Day = A.getDay()+1; 
            var  weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var weekDay=weekNames[Day];
 
           
            heading.textContent = current.name;
            para.textContent = current.description;
            date.textContent = `${weekDay} ${monthName} ${isoDay}, ${isoYear}`;

            clearfix.setAttribute('class', 'clearfix');

            holidayInfo.appendChild(heading);
            holidayInfo.appendChild(date);
            holidayInfo.appendChild(para);
            holidayInfo.appendChild(clearfix);
            section.appendChild(holidayInfo);


            
   
            let title = `Holidays in ${monthName} ${isoYear}`
            document.getElementById('resultsTitle').innerHTML = title;
            
        
      
        }
        }
  }
    

 
  