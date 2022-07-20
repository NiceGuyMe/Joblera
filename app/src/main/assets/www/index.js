const puppeteer = require('puppeteer');
const fs = require('fs');
let page_number = 1

function reloadpage(){
page_number++;
(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
        await page.goto(`https://www.portaljob-madagascar.com/emploi/liste/page/${page_number}`);
        const job = await page.evaluate(() => {
            let job = [];
            let elements = document.querySelectorAll('article.item_annonce');
            for (element of elements){
                job.push({
                        poste: element.querySelector('strong')?.textContent,
                        society: element.querySelector('h4')?.textContent,
                        contrat: element.querySelector('h5')?.textContent,
                        description: element.querySelector('a.description')?.text.trim(),
                        image: element.querySelector('img')?.src,
                        status : element.querySelector('div.urgent_flag')?.textContent
                    }
                )
            }
            return job;
        });
        var jobString = JSON.stringify(job);
      fs.writeFile("job.json", jobString, function(err, result) {
          if(err) console.log('error', err);
      });
        await browser.close();
})();
}
}
reloadpage();