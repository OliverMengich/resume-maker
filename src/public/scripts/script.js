// import html2canvas from "C:/Users/olive/Documents/VSCODE_PROJECTS/resume-maker/node_modules/.pnpm/html2canvas@1.4.1/node_modules/html2canvas/dist/types/index";
const btnPrint = document.getElementById('print-btn');
btnPrint.addEventListener('click',async ()=>{
    console.log("I was clicked");
    const domElement = await document.getElementById('resume-div');
    let obj = {
        str: domElement
    }
    console.log(JSON.stringify(obj));
    // console.log(domElement.toString());
    const data = await fetch('http://localhost:4000/print-pdf',{
        method: 'POST',
        body: {
            domElement: await domElement
        }
    })
    const blob = await data.blob();
    const url = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf'; // Replace with the name you want to give to the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
})
function getPrintPDF() {
    console.log("getPrintPDF");
}