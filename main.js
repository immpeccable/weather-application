(()=>{let e=document.getElementById("search-city"),t=document.getElementById("search-button"),n=document.getElementById("error-msg"),d=document.getElementById("weather-identifier"),o=document.getElementById("city-name"),a=document.getElementById("degree"),i=document.getElementById("feels-like"),m=document.getElementById("wind"),r=document.getElementById("humidity");function c(e){return Math.round(100*(e+Number.EPSILON))/100}async function l(e){try{let t=await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=baead7b630649327b2d7239548d6e961",{mode:"cors"}),l=await t.json();console.log(l);let u=c(l.main.humidity),s=Math.round(l.main.temp-272),y=c(l.main.feels_like-272),E=l.weather[0].description,I=l.wind.speed;i.textContent=`FEELS LIKE: ${y}°C`,m.textContent=`WIND: ${I} km/h`,r.textContent=`HUMIDITY: ${u}%`,a.innerHTML=`${s} <div class = "celcius-image">\n        °C\n    </div>`,o.textContent=e.toUpperCase(),d.textContent=E.toUpperCase(),n.textContent=""}catch(t){n.textContent=`No location found for ${e}`}}l("Ankara"),t.addEventListener("click",(()=>{l(e.value)})),e.addEventListener("keypress",(t=>{"Enter"==t.key&&l(e.value)}))})();