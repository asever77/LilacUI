function exportPDF(number) {
    $(window).scrollTop(0);
    $('.compare-result').scrollTop(0);
    $(window).scrollLeft(0);
    setTimeout(function(){
        let doc = new jspdf.jsPDF('p', 'mm')
        //html2canvas($('.print-section')[number]).then(function(canvas) { //저장 영역 div id
        html2canvas($('.compare-result')[1]).then(function(canvas) { //저장 영역 div id
             
            // 캔버스를 이미지로 변환
            var imgData = canvas.toDataURL('image/png');
      
      
            var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
            var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var margin = 0; // 출력 페이지 여백설정
            //var margin = 10; // 출력 페이지 여백설정
      
            //var doc = new jsPDF('p', 'mm');
            var position = 0;
      
            // 첫 페이지 출력
            doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
   
            position = heightLeft - imgHeight
    
      
            // 한 페이지 이상일 경우 루프 돌면서 출력
            while (heightLeft >= 20) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
      
            // 파일 저장
            doc.save('file-name.pdf');
            /*$('button[name="#compare-2"]').trigger('click');
      
            html2canvas($('.compare-result:eq(0)')[0]).then(function(canvas) { //저장 영역 div id
      
                // 캔버스를 이미지로 변환
                var imgData = canvas.toDataURL('image/png');
      
                var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
                var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var margin = 10; // 출력 페이지 여백설정
      
                //var doc = new jsPDF('p', 'mm');
                var position = 170;
      
                // 첫 페이지 출력
                //doc.addPage();
                doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
      
                // 한 페이지 이상일 경우 루프 돌면서 출력
                while (heightLeft >= 20) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
      
                // 파일 저장
                doc.save('file-name.pdf');
            });*/
      
        });
    }, 0);
        
 
}