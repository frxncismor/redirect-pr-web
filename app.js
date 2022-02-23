function generate() {
  let input = document.querySelector('#input').value;
  let lines = input.split('\n');
  let output = document.querySelector("#output");
  let outputArray = [];

  for(const line of lines) {
    if (/\S/.test(line)) {
      if (!line.includes('#')) {
				splitted = line.split(' ');
				origin = splitted[0];
				destination = splitted[1];
				indexOfDomain = origin.indexOf('.');
				cleanOrigin = origin.slice(indexOfDomain + 1);
				indexofTopLevelDomain = cleanOrigin.indexOf('.');
				siteChanged = cleanOrigin.slice(0, indexofTopLevelDomain);
        prDescription = `
        ### ${siteChanged}			
        - Production: https://www.${cleanOrigin}
        - CI: https://ci-www.${cleanOrigin}
        - Staging: https://staging-www.${cleanOrigin}
        - Destination: ${destination}
        
        `;
        outputArray.push(prDescription);
      }
    }
  }
  output.innerText = outputArray.join('');

}