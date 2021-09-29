function change()
{
    var btn = document.getElementById("sendmsg");
    if(btn.innerText==="Send Message"){
       btn.innerText="Sent Successfully";
       btn.className="btn btn-success";
      }
}