const array=[]
const Faculty_name=document.getElementById('fname');
const Participant_name=document.getElementById('pname');
const prog=document.getElementById('program');
const emp=document.getElementById('emp-id')
const output=document.getElementById('getTable');

function add()
{
   let value=1;
  
   var obj={};
   if(Faculty_name.value!="" && Participant_name.value!="" && prog.value!="" && emp.value!=""){
    document.getElementById('mytable').style.visibility="visible";
    array.forEach((object)=>{
        if(object.fname==Faculty_name.value  && object.pname==Participant_name.value && object.prog==prog.value && object.empid==emp.value
        || object.fname=="" && object.pname==""  && object.prog==""  && object.empid=="")
        {        value=0;
           
        }
                            });
        if(value==1){
            obj.fname=Faculty_name.value;
            obj.prog=prog.value;
            obj.pname=Participant_name.value;
            obj.empid=emp.value;
            array.push(obj);
            let rows="";
            array.forEach((object)=>{
                        const tr=`<tr>
                                    <td>${object.fname}</td>
                                    <td>${object.pname}</td>
                                    <td>${object.prog}</td>
                                    <td>${object.empid}</td>
                                    </tr>`;
                        rows+=tr;
                        document.getElementById('table-body').innerHTML=rows;
                });
    }
}

}
output.addEventListener('click',add);


