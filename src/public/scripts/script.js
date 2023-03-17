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
    console.log(await data.json());
    // html2canvas(domElement).then(function (canvas) {
    //     var imgData = canvas.toDataURL('image/png');
    //     var doc = new jsPDF('p', 'mm', 'a4');
    //     // doc.addImage(imgData, 'PNG', 10, 10);
    //     doc.addImage(imgData, 'PNG', 10, 10, 180, 180);
    //     doc.save('sample-file.pdf');
    // });
})
function getPrintPDF() {
    console.log("getPrintPDF");
}