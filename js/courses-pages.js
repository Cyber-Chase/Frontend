const btnGen = document.querySelector("#certificate-button");

btnGen.addEventListener("click", () => {

    const certificate = document.querySelector('#certificate')

        const options = {
            margin: [10, 10, 10, 10],
            filename: "certificate.pdf",
            html2canvas: {scale: 2},
            jsPDF: {unit: "mm", format: "a4", orientation: "landscape"}
        }

    html2pdf().set(options).from(certificate).save();

})


console.log(certificate)