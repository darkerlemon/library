
const container = document.querySelector('.container');
const main = document.querySelector('main');
let myLibrary = [];
let input = [];
let newArray = [];

function getData(form) {
    const formData = new FormData(form);
  

  input = Object.fromEntries(formData);
    console.log(Object.fromEntries(formData));
    console.log(input);
  function appendObjTo(thatArray, newObj) {
    const frozenObj = Object.freeze(newObj);
    return Object.freeze(thatArray.concat(frozenObj));
  }
  const newArray = appendObjTo(myLibrary, input);
  myLibrary = newArray;
  console.log(myLibrary);
  console.log(newArray);

  function displayBooks() {
    
      const card = document.createElement('div');
      card.classList.add('card');
      const deleteBtn = document.createElement('p');
      const readBtn = document.createElement('button');
      readBtn.classList.add('readBtn');
      deleteBtn.classList.add('deleteBtn');
      const paraTitle = document.createElement('p');
      const paraAuthor = document.createElement('p'); 
      const paraPages = document.createElement('p');
      const paraRead = document.createElement('p');
      container.appendChild(card);
      card.appendChild(paraTitle);
      card.appendChild(paraAuthor);
      card.appendChild(paraPages);
      card.appendChild(paraRead);
      card.appendChild(deleteBtn);
      card.appendChild(readBtn);
      

      if (input.read == undefined) {
        readBtn.textContent = 'Not Read';
      } else {
        readBtn.textContent = 'Read';
  }
  readBtn.addEventListener('click', function(e){ 
    if (e.target.textContent == 'Read') {
      e.target.textContent = 'Not Read';
    } else {e.target.textContent = 'Read'};
  });

      deleteBtn.innerText = 'x';
      deleteBtn.style.position = 'absolute';
      deleteBtn.style.top = '0';
      deleteBtn.style.backgroundColor = '#9E8279';
      deleteBtn.style.borderRadius = '50%'
      deleteBtn.style.color = '#f5f6f7';
      deleteBtn.style.padding = '5px';
      paraTitle.innerText = `Title: ${input.title}`;
      paraAuthor.innerText = `Author: ${input.author}`;
      paraPages.innerText = `Pages: ${input.pages}`;

      deleteBtn.addEventListener('click', function(e){ 
        console.log(e);
        container.removeChild(card);
        });
      
    
};
displayBooks();


  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });


