import express,{Request, Response} from 'express';
import puppeteer from 'puppeteer';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import controller from './controllers';
const app = express();
app.use(express.json());
app.use(express.raw())
app.use(expressLayouts);
console.log(path.join(__dirname,'public'))
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(_,res: Response)=>{
    res.render('index',{
        info: controller.data
    })
});
app.post('/print-pdf',async (req: Request,res:Response)=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4000/',{waitUntil: 'networkidle2'})
    // await page.setContent(req.body.html);
    console.log('page loaded',page);
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true
    });
    console.log('pdf generated');
    await browser.close();
    res.contentType('application/pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=result.pdf"`);
    return res.status(200).send(pdf);
})
    
export default app;