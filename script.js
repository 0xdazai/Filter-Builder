document.getElementById('run-button').addEventListener('click', function() {
    var generalTerms = document.getElementById('general-terms').value.split('\n');
    var staffMembers = document.getElementById('staff-members').value.split('\n');
    var isPhraseChecked = document.getElementById('phrase-check').checked;
    var isRegexChecked = document.getElementById('regex-check').checked;
    
    // Save to localStorage
    localStorage.setItem('generalTerms', JSON.stringify(generalTerms));
    localStorage.setItem('staffMembers', JSON.stringify(staffMembers));
    localStorage.setItem('isPhraseChecked', isPhraseChecked);
    localStorage.setItem('isRegexChecked', isRegexChecked);

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

// Load from localStorage
window.onload = function() {
    var generalTerms = JSON.parse(localStorage.getItem('generalTerms'));
    var staffMembers = JSON.parse(localStorage.getItem('staffMembers'));
    var isPhraseChecked = JSON.parse(localStorage.getItem('isPhraseChecked'));
    var isRegexChecked = JSON.parse(localStorage.getItem('isRegexChecked'));

    if(generalTerms) document.getElementById('general-terms').value = generalTerms.join('\n');
    if(staffMembers) document.getElementById('staff-members').value = staffMembers.join('\n');
    if(isPhraseChecked !== null) document.getElementById('phrase-check').checked = isPhraseChecked;
    if(isRegexChecked !== null) document.getElementById('regex-check').checked = isRegexChecked;
};

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
