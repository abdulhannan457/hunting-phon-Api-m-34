
// function loadPhone(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(res => res.json())
//     .then(data => console.log(data.data))
// }
// loadPhone()

// const loadPhone = async () =>{
//  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//  const data = await res.json()
// console.log(data.data)     
// }
// loadPhone()

// const loadPhone = async (searchText) => {
// const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
// const data = await res.json();
// const phones = data.data;
// // console.log(phones)
// displayPhones(phones)

// }


// const displayPhones = phones =>{
//     // console.log(phones)
//     const phoneContainer = document.getElementById('phone-container');
//     phoneContainer.textContent = '';
//     phones.forEach(phone => {
//         console.log(phone)
//         const phoneCard = document.createElement('div');
//          phoneCard.classList = `card w-96 p-4 bg-gray-100 shadow-xl`;
//          phoneCard.innerHTML = `
//          <figure><img src="${phone.image}" alt="Shoes" /></figure>
//         <div class="card-body">
//           <h2 class="card-title"${phone.phone_name}"</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//           `
//          phoneContainer.appendChild(phoneCard)
//             } )
// }

// function handleSeatch(){
//    const searchField = document.getElementById('search-field');
//    const searchText = searchField.value;
//    console.log(searchText)
//    loadPhone(searchText)
// //    searchField.value = ' ';
// }

// ---------------------------------------------------------------------------------
// function এর parameter হিসেবে যা দিব , fetch এর মধ্যেও তাই দিতে হবে ।
function loadPhone(hannan){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${hannan}`)
    .then(res => res.json())
   
    .then(data => dataPhone(data.data))
}

function dataPhone(phones){
    console.log(phones)
const phoneContainer = document.getElementById('phone-container');
// নিচের লাইনটা হলো প্রতেকবার সার্চ দেয়ার পরে phone-container এই div টাকে খালি করার জন্য 
phoneContainer.textContent = '';
    for(const phone of phones){
            console.log(phone)
      
            const postDiv =  document.createElement('div');
            postDiv.innerHTML = `
            <div class="card w-96 bg-gray-100 shadow-xl"> 
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name
          }</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
            `
            phoneContainer.appendChild(postDiv)

           }}

           function buttonHandler(){
           const searchField = document.getElementById('search-field')
           const searchText = searchField.value;
           console.log(searchText)
           
           loadPhone(searchText)
           }

















// const dataPhone = (phones) =>{
// console.log(phones)
// phones.forEach(phone => {
//     console.log(phone)
// })


// }

    

  
    



