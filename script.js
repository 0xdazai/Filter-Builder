document.getElementById('run-button').addEventListener('click', function() {
    var generalTerms = document.getElementById('general-terms').value.split('\n');
    var staffMembers = document.getElementById('staff-members').value.split('\n');
    var isPhraseChecked = document.getElementById('phrase-check').checked;
    var isRegexChecked = document.getElementById('regex-check').checked;
    
    var allTerms = generalTerms.concat(staffMembers);
    
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';  // clear previous output

    var copiedCommands = JSON.parse(localStorage.getItem('copiedCommands')) || [];

    allTerms.forEach(function(term, index) {
        if (isPhraseChecked) {
            var command = '/name-filters add phrase ' + term;
            var copied = copiedCommands.includes(command) ? ' button-copy-copied' : '';
            outputDiv.innerHTML += `<p><button class="button-copy${copied}" id="button-${index}" onclick="copyToClipboard('${command}', 'button-${index}')">Copy</button><span class="command-text">- ${command}</span></p>`;
        }
        if (isRegexChecked) {
            var command = '/name-filters add regex (?i)^' + term + '$';
            var copied = copiedCommands.includes(command) ? ' button-copy-copied' : '';
            outputDiv.innerHTML += `<p><button class="button-copy${copied}" id="button-${index+allTerms.length}" onclick="copyToClipboard('${command}', 'button-${index+allTerms.length}')">Copy</button><span class="command-text">- ${command}</span></p>`;
        }
    });
});

function copyToClipboard(text, buttonId) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var buttonElement = document.getElementById(buttonId);
    buttonElement.classList.add('button-copy-copied');

    var copiedCommands = JSON.parse(localStorage.getItem('copiedCommands')) || [];
    copiedCommands.push(text);
    localStorage.setItem('copiedCommands', JSON.stringify(copiedCommands));
}

// When the page is refreshed, clear the local storage.
window.onbeforeunload = function() {
    localStorage.clear();
};
