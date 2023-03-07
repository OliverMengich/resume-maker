import express,{Response} from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import controller from './controllers';
const app = express();
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({extended: true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./public')))
app.get('/',(_,res: Response)=>{
    res.render('index',{
        info: controller.data
    })
});
export default app;