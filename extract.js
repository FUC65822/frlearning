const fs = require('fs');
const path = require('path');
const dir = 'd:/githubde/frlearning/prona/temp/ppt/slides';
let allTexts = [];
if(fs.existsSync(dir)){
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.xml')).sort((a,b) => {
      const numA = parseInt(a.replace('slide', '').replace('.xml', ''));
      const numB = parseInt(b.replace('slide', '').replace('.xml', ''));
      return numA - numB;
  });
  for(const file of files){
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const texts = [];
    const regex = /<a:t>(.*?)<\/a:t>/g;
    let match;
    while((match = regex.exec(content)) !== null){
      texts.push(match[1]);
    }
    if(texts.length > 0){
      allTexts.push(`--- ${file} ---`);
      allTexts.push(texts.join(' '));
    }
  }
}
fs.writeFileSync('d:/githubde/frlearning/slides.txt', allTexts.join('\n'), 'utf8');
