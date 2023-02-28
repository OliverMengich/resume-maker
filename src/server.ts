import express,{Response} from 'express';
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set('views','');
app.set('view engine','ejs');
app.get('/',(req,res: Response)=>{
    res.send('<h1>Welcome to resume maker</h1>')
});
export default app;