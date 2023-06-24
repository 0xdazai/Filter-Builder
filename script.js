document.getElementById('run-button').addEventListener('click', function() {
    var generalTerms = document.getElementById('general-terms').value.split('\n');
    var staffMembers = document.getElementById('staff-members').value.split('\n');
    var isPhraseChecked = document.getElementById('phrase-check').checked;
    var isRegexChecked = document.getElementById('regex-check').checked;
    
    var allTerms = generalTerms.concat(staffMembers);
    
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';  // clear previous output
    
    allTerms.forEach(function(term) {
        if (isPhraseChecked) {
            var command = '/name-filters add phrase ' + term;
            outputDiv.innerHTML += `<p><button class="button-copy" onclick="copyToClipboard('${command}')">Copy</button><span class="command-text">- ${command}</span></p>`;
        }
        if (isRegexChecked) {
            var command = '/name-filters add regex (?i)^' + term + '$';
            outputDiv.innerHTML += `<p><button class="button-copy" onclick="copyToClipboard('${command}')">Copy</button><span class="command-text">- ${command}</span></p>`;
        }
    });
});

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
