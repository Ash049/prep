const getCommitButton = document.getElementById('get-commit');

const commitResponse = document.getElementById('commit-result');

getCommitButton.addEventListener('click', getCommitDetail);


async function getCommitDetail() {
    commitResponse.textContent = "";
    const url = 'https://api.github.com/search/commits?q=repo:freeCodeCamp/freeCodeCamp author-date:2020-03-01..2020-04-11';
    const headers = {
        "Accept": "application/vnd.github.cloak-preview"
    }

    const response = await fetch(url, {
        "headers": headers
    });
  console.log("response",response);
    const result = await response.json();
        
    result.items.forEach(element => {
        const elementLI = document.createElement('li');
        const elementDiv = document.createElement('div');

        const authorName = document.createElement('div');
        const dateCommit= document.createElement('div');
        const msgCommit = document.createElement('div');

        elementDiv.className = "list-item";
        authorName.textContent = element.commit.author.date;
        dateCommit.textContent = element.commit.author.name;
        msgCommit.textContent = element.commit.message;
        
        elementDiv.appendChild(authorName);
        elementDiv.appendChild(dateCommit);
        elementDiv.appendChild(msgCommit);

        elementLI.appendChild(elementDiv);
        commitResponse.appendChild(elementLI);
    });
    const elementDiv = document.createElement('div');
    elementDiv.style.clear = 'both';
    commitResponse.appendChild(elementDiv);
    console.log('result', result);
}