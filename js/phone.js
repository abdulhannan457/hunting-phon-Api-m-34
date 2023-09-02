// function loadPhone(){
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// .then(res => res.json())
// .then(data => console.log(data.data))
// }
// loadPhone()
// -------------------------------

// const loadPhone = async (searchText) =>{
// const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
// const data = await res.json();
// const phones = data.data;
// // console.log(phones)
// displayPhones(phones)

// }

// // -----------------------------
// const displayPhones = phones =>{
// // console.log(phones)
// // step 1- select the place where i put the new element
// const phoneContainer = document.getElementById('phone-container');
// // clear phone container cards before adding new cards
// phoneContainer.textContent = ' ';
// phones.forEach(phone =>{
//     console.log(phone)

// // step 2--create a new div
// const phoneCard = document.createElement('div');

// phoneCard.classList = 'card w-96 bg-gray-100 p-4 shadow-xl';
// // step3- set innerHTML
// phoneCard.innerHTML = `
// <figure><img src="${phone.image}" /></figure>
// <div class="card-body">
// <h2 class="card-title">${phone.phone_name}</h2>
// <p>If a dog chews shoes whose shoes does he choose?</p>
// <div class="card-actions justify-end">
// <button class="btn btn-primary">Buy Now</button>
// </div>
// </div>
// `
// phoneContainer.appendChild(phoneCard)
// // step4- appendChild


// })
// }

// // handle search button
// const hendleSearch = () =>{
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
//     console.log(searchText)
//     loadPhone(searchText)
// }