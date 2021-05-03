const cityName = document.getElementById('cityName');
const submitButton = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const tempStatus = document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');




const getInfo = async (event) => {
    event.preventDefault();
    let cityNames = cityName.value;
    if (cityNames === "") {
        city_name.innerText = `Please enter city name`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityNames}&units=metric&appid=0e231aaa4a2f379f0b1a0102965135a2`;
            const response = await fetch(url);
            const jsonResponse = await response.json();
            const arrData = [jsonResponse];

            const tempMode = arrData[0].weather[0].main;
            const placeName = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempValue = arrData[0].main.temp;

            city_name.innerText = placeName;
            temp.innerText = tempValue;

            if(tempMode=="Clear"){
                tempStatus.innerHTML=
                '<i class="fas fa-sun" style="color:#eccc68;"></i>';
            }else if(tempMode=="Cloud"){
                tempStatus.innerHTML=
                '<i class="fas fa-cloud" style="color:#f1f2f6;"></i>';
            }else if(tempMode=="Rain"){
                tempStatus.innerHTML=
                '<i class="fas fa-rain" style="color:#a4b0be;"></i>';
            }else{
                tempStatus.innerHTML='<i class="fas fa-sun" style="color:#eccc68;"></i>';
            }
            datahide.classList.remove('data_hide');

        } catch(err) {
            console.log(err);
            city_name.innerText = `Please enter city name properly`;
            datahide.classList.add('data_hide');
        }

    }
};
submitButton.addEventListener('click', getInfo);