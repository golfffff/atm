$(function(){
    $("#btn1").on('click',function(){
        var money = $("#money").val();
        var size = money.length;
        var unit = ['ศูนย์','เอ็ด','สิบ','ร้อย','พัน','หมื่น','แสน'];
        var digit = ['','หนึ่ง','สอง','สาม','สี่','ห้า','หก','เจ็ด','แปด','เก้า'];
        var moneyarr = money.split('');
        var moneytxt = '';
        moneyarr.forEach(value => {
            var postfix = unit[size];
            var prefix = digit[value];

            if(size == 1 && value != 1)
            {
                postfix = '';
            } // ถ้าหลักหน่วยไม่เท่ากับหนึ่ง ไม่ต้องแสดงเอ็ด

            if(size == 1 && value == 1)
            {
                prefix = '';
            } // ถ้าหลักหน่วย = 1 ไม่ต้องแสดงเลข แสดงเอ็ดแทน

            if(size == 2 && value == 2)
            {
                prefix = 'ยี่';
            } // ถ้า หลักสิบ = 2 ให้เปลี่ยนเป็นยี่

            if(value == 0)
            {
                postfix = '';
            }// ถ้าค่าเป็น 0 ไม่ต้องแสดงหลัก
            moneytxt += prefix+postfix; 
            
            
            console.log(moneytxt,size,value);
            size--;
        });


        var tenh = 0,fiveh = 0,oneh = 0;
        if(money > 1000)
        {
            tenh = parseInt(money / 1000);
            var tmp1 = (money - (tenh * 1000));
            if(tmp1 >= 500)
            {
                fiveh = parseInt(tmp1 / 500);
                var tmp2 = (tmp1 - (fiveh*500))
                oneh = parseInt(tmp2 / 100);
            }else{
                oneh = parseInt(tmp1 / 100);
            }
        }else if(money < 1000 && money >= 500){
            fiveh = parseInt(money / 500);
            oneh = parseInt((money - (fiveh * 500))/100);
        }else{
            oneh = parseInt(money / 100);
        }
        console.log(tenh,fiveh,oneh);

        
        $("#tenh,#fiveh,#oneh,#moneytxt").addClass('spinner-border spinner-border-sm');
        $("#tenh,#fiveh,#oneh,#moneytxt").text('');
        setTimeout(()=> {
            $("#tenh,#fiveh,#oneh,#moneytxt").removeClass('spinner-border spinner-border-sm');
            $("#tenh").text(tenh).hide().fadeIn(300);
            $("#fiveh").text(fiveh).hide().fadeIn(300);
            $("#oneh").text(oneh).hide().fadeIn(300);
            $("#moneytxt").text(moneytxt).fadeIn(300);
        }  ,500);

        

        console.log(moneytxt);
    });
});