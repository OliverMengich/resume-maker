import express,{Request, Response} from 'express';
import jspdf from 'jspdf'

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
app.use(express.static("C:/Users/olive/Documents/VSCODE_PROJECTS/resume-maker/node_modules/.pnpm/html2canvas@1.4.1/node_modules/html2canvas/dist/types/index"))
app.get('/',(_,res: Response)=>{
    res.render('index',{
        info: controller.data
    })
});
app.post('/print-pdf',(req: Request,res:Response)=>{
    console.log('I was called');
    console.log(req.body);
    
    return res.status(200).json({message: 'successful'})
})
export default app;