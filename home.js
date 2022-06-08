document.getElementById("searchproperty").addEventListener("click",propertytoggle);function propertytoggle()
{var x=document.getElementById("propertyFinderDetails");if(x.style.display==="none"){x.style.display="block";}else{x.style.display="none";}}
document.getElementById("callBox").addEventListener("click",opencallbox);function opencallbox()
{var x=document.getElementById("callTollFree");if(x.style.display==="none"){x.style.display="block";}else{x.style.display="none";}}
document.getElementById("mailBox").addEventListener("click",openmailBox);function openmailBox()
{var x=document.getElementById("formEnquiry");if(x.style.display==="none"){x.style.display="block";}else{x.style.display="none";}}
document.getElementById("lnkmenu").addEventListener("click",menutoggle);function closediv(){document.getElementById("propertyFinderDetails").style.display="none";}
function menutoggle()
{var x=document.getElementById("menucontainer");if(x.style.display==="none"){x.style.display="block";document.getElementById("lnkmenu").classList.add("is-active");document.getElementById("divopen").classList.add("open");document.getElementById("menucontainer").classList.add("hamMenuDiv");}else{x.style.display="none";document.getElementById("lnkmenu").classList.remove("is-active");document.getElementById("divopen").classList.remove("open");document.getElementById("menucontainer").classList.remove("hamMenuDiv");}}
document.getElementById("dropdownBudget").addEventListener("click",loadbudget);function loadbudget()
{var x=document.getElementById("budgetcontianer");if(x.style.display==="none"){x.style.display="block";document.getElementById("minbudget").style.display="block";document.getElementById("maxbudget").style.display="block";}else{x.style.display="none";}}
var minvalue="",maxvalue="";document.body.onclick=function(e){if(window.event){e=event.srcElement;}
else{e=e.target;}
if(e.className&&e.className.indexOf('minprice')!=-1){document.getElementById("min").value=e.getAttribute("data-buget");document.getElementById("minbudget").style.display="none";minvalue=e.getAttribute("data-buget");}
if(e.className&&e.className.indexOf('maxprice')!=-1){document.getElementById("max").value=e.getAttribute("data-buget");document.getElementById("maxbudget").style.display="none";document.getElementById("budgetcontianer").style.display="none";maxvalue=e.getAttribute("data-buget");document.getElementById("dropdownBudget").innerHTML=minvalue+" - "+maxvalue;}}





function openCity(evt, cityName) {
    var i, formData, tablinks;
    formData = document.getElementsByClassName("formData");
    for (i = 0; i < formData.length; i++) {
        formData[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}