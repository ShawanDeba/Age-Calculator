let age = document.getElementById('age_inp');
let disp_age = document.getElementById('age_display');
age.max = new Date().toISOString().split('T')[0];


function calculate_age(){
    let birthdate = new Date(age.value);
    let today = new Date();

    
    let y1 = birthdate.getFullYear();
    let m1 = birthdate.getMonth()+1;
    let d1 = birthdate.getDate();

    let y2 = today.getFullYear();
    let m2 = today.getMonth()+1;
    let d2 = today.getDate();

    // console.log(y1)
    // console.log(m1)
    // console.log(d1)
   
    // console.log(y2)
    // console.log(m2)
    // console.log(d2)
    
    let y3=y2-y1;
    let m3=m2-m1;
    let d3=d2-d1;
    
    if(m1<=m2)
        m3=m2-m1;

    else
    {
        y3--;
        m3=12-m1+m2;
    }
    
    if(d1<=d2)
        d3=d2-d1;

    else
    {
        m3--;
        if(m3<0)
        {
            m3=11;
            y3--;
        }
        d3=getDaysInMonth(y1,d1)-d1+d2;
    }
    
    // console.log(y3)
    // console.log(m3)
    // console.log(d3)

    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }
    
    disp_age.innerHTML= `You are <span>${y3}</span> years, <span>${m3}</span> months & <span>${d3}</span> days old`;
}