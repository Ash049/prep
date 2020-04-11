document.onRea
const getCommitButton = document.getElementById('get-commit');

const commitResponse = document.getElementById('commit-result');

getCommitButton.addEventListener('click',getCommitDetail);


 async function getCommitDetail(){
  const url = 'https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:2020-03-01..2020-04-01 ';
  const headers = {
      "Accept":"application/vnd.github.cloak-preview"
  }

  const response =  await fetch(url,{
      "headers":headers
  });

  const result =  await response.json();

  result.items.forEach(element => {
      const elementDiv = document.createElement('div');
      const dateSpan = document.createElement('span');
      const nameSpan = document.createElement('span');
      dateSpan.textContent = element.commit.author.date;
      nameSpan.textContent = element.commit.author.name;
      elementDiv.appendChild(nameSpan);
      elementDiv.appendChild(dateSpan);
      commitResponse.appendChild(elementDiv);
  });

  console.log('result',result);
}