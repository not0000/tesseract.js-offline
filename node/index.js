const { createWorker } = require('tesseract.js');
const path = require('path');

const worker = createWorker({
  langPath: path.join(__dirname, '..', 'lang-data'), 
  logger: m => console.log(m),
});

(async () => {
  await worker.load();
  await worker.loadLanguage('chi_tra');
  await worker.initialize('chi_tra');
  const { data: { text } } = await worker.recognize(path.join(__dirname, '..', 'images', 'testocr1.png'));
  console.log(text);
  await worker.terminate();
})();
