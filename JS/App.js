
const basePrice = 1299;

// Memory Function
const sixteenGB = document.getElementById('SixteenGB').addEventListener('click', function(){

    const extraMemory = document.getElementById('extraMemory');
    const extraMemMonry = 180;
    extraMemory.innerText=parseFloat(extraMemMonry);
    TotalPrice()

});

const eightGB = document.getElementById('EightGB').addEventListener('click', function(){

    const extraMemory = document.getElementById('extraMemory');
    const extraMemMonry = 0;
    extraMemory.innerText=parseFloat(extraMemMonry);
    TotalPrice()

});

// Storage Functions
const twoFiveSixGB = document.getElementById('twoFiveSix').addEventListener('click', function(){
        // 512
    const extraStorageFiveTwelve = document.getElementById('extraStorage');
    const extrafivetwelve = 0;
    extraStorageFiveTwelve.innerText= extrafivetwelve;
    TotalPrice();

});

const FiveTwelveGB = document.getElementById('fiveTwelve').addEventListener('click', function(){
        // 512
    const extraStorageFiveTwelve = document.getElementById('extraStorage');
    const extrafivetwelve = 100;
    extraStorageFiveTwelve.innerText= extrafivetwelve;
    TotalPrice();

});

const OneTB = document.getElementById('OneTB').addEventListener('click', function(){
  
        //1 TB
    const extraStorageOneTB = document.getElementById('extraStorage');
    const extrafivetwelve = 180;
    extraStorageOneTB.innerText= parseFloat(extrafivetwelve);
    TotalPrice();

});

// Delivary Charge
const dChargezero = document.getElementById('zeroDel').addEventListener('click', function(){
  
    //Early Del
const earlyDelivary = document.getElementById('extraDelivary');
const extrafivetwelve = 0;
earlyDelivary.innerText= parseFloat(extrafivetwelve);
TotalPrice()

});
const dCharge = document.getElementById('earlyDel').addEventListener('click', function(){
  
    //Early Del
const earlyDelivary = document.getElementById('extraDelivary');
const extrafivetwelve = 20;
earlyDelivary.innerText= parseFloat(extrafivetwelve);
TotalPrice()

});


//Coupon
const coupon = document.getElementById('coupon').addEventListener('click', function(){
    const couponText = document.getElementById('couponText').value;

    console.log(couponText);


    if(couponText=="stevekaku"){
       console.log(TotalNum);
       const NumTotal = parseFloat(TotalNum)
       const Discount = NumTotal  * .80;
       console.log(Discount);

       const DisTotal = document.getElementById('discountTotal');
    //    console.log(DisTotal);
       DisTotal.innerText = DisTotal;
     
    }
    else{
        alert("Wrong Code");
    }

});

function TotalPrice(){
    const extraStorageOneTB = document.getElementById('extraStorage');
    // console.log(extraStorageOneTB.innerText);
    const TotalPrice = document.getElementById('totalPrice');
   

    const extraMemory = document.getElementById('extraMemory');
    // console.log(extraMemory.innerText);

    const extraDel = document.getElementById('extraDelivary');
        // console.log(extraDel.innerText);

    TotalPrice.innerText = basePrice+parseFloat(extraStorageOneTB.innerText)+parseFloat(extraMemory.innerText)+parseFloat(extraDel.innerText);
    // const TotalPrice = document.getElementById('totalPrice');
    // TotalPrice.innerText = parseFloat(extraMemory.innerText);


}