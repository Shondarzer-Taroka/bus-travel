
 let items =document.getElementsByClassName('item')

let sum=0
 let click=0
console.log(click);
let seat=0



for (const item of items) {
 
  item.addEventListener('click',function removing(e) {
    let economy_container=document.getElementById('economy-container')

    let economy_1=document.getElementById('economy-1')
    let economy_2=document.getElementById('economy-2')

    
    economy_1.classList.add('hidden')
    economy_2.classList.add('hidden')
    let seat_increase=document.getElementById('seat-increase')
    let forty=document.getElementById('forty')
   let decrease_seat=0 
   
    seat++
    click++

    // console.log(seat);

    if (seat>4) {
      alert("You can buy only four seats")
    }

      if (seat<=4) {
        decrease_seat++
     
        seat_increase.innerText=seat
        let hold_minus= parseInt( forty.innerText)- decrease_seat
        forty.innerText=hold_minus
        // -=decrease_seat
        let item_name=  e.target.innerText
        //  console.log(item_name);
         let newDiv=createDiv(item_name)
         economy_container.appendChild(newDiv)
        //  console.log(click);
          total('money')

         
          if (click===4) {
            document.getElementById('my-coupon').removeAttribute('disabled')
            // document.getElementById('apply').removeAttribute('disabled')
            let apply_button=document.getElementById('apply')
            let my_coupon=document.getElementById('my-coupon')
        
            apply_button.addEventListener('click',function () {
            // let value_my_coupon=document.getElementById('my-coupon').value.split(' ').join('').toUpperCase()
            let value_my_coupon=document.getElementById('my-coupon').value
           

            if (value_my_coupon==='NEW15' || value_my_coupon==='Couple 20') {
              if (value_my_coupon==='NEW15') {
                let cutting= 0.15*sum
                // console.log(cutting);
                let total_amount=sum-cutting
                discount(cutting)
                grand_total.innerText=total_amount
                document.getElementById('input-coupon').classList.add('hidden')
                document.getElementById('input-coupon').classList.remove('flex')
                document.getElementById('grand-total-container').classList.add("border-t-2","border-dashed","border-[#9d9494]")



              }
              else{
                let cutting= 0.2*sum
                // console.log(cutting);
                let total_amount=sum-cutting
                discount(cutting)
                grand_total.innerText=total_amount

                document.getElementById('input-coupon').classList.add('hidden')
                document.getElementById('input-coupon').classList.remove('flex')
              }
            }else{
              alert("please type valid coupon")
            document.getElementById('my-coupon').value=""

            }



            }) 
          }

          // else{
          //   alert('You can buy only four seats')
          // }
         
          
            // document.getElementById('my-coupon').removeAttribute('disabled')
            // document.getElementById('apply').removeAttribute('disabled')
            // let apply_button=document.getElementById('apply')
            // let my_coupon=document.getElementById('my-coupon')

            // apply_button.addEventListener('click',function () {
            // let value_my_coupon=document.getElementById('my-coupon').value
            // console.log( value_my_coupon);
            // })
    
        

        item.classList.add('bg-[#1DD100]','text-white')
        e.target.removeEventListener('click',removing)
      }

      // let num = parseInt(document.getElementById('number').value)
      // console.log(num);
      // console.log(click);
      // if (click =>1 && typeof num==NaN) {
      //   // document.getElementById('next-btn').setAttribute('disabled')
      //   // document.getElementById('next-btn').setAttribute('disabled')
      //   document.getElementById('next-btn').setAttributeNodeNS('class',"undefined")
        
      // }

      // else{
      //   // document.getElementById('next-btn').removeAttribute('disabled')
       
      // }


      // else{
      //   console.log('pp');
      // }



      // if (seat<=4) {
      //   decrease_seat++
        
      //   seat_increase.innerText=seat
      //   let hold_minus= parseInt( forty.innerText)- decrease_seat
      //   forty.innerText=hold_minus
      //   // -=decrease_seat
      //   let item_name=  e.target.innerText
      //   //  console.log(item_name);
      //   //  let newDiv=createDiv(item_name)
      //   //  economy_container.appendChild(newDiv)
      //   item.classList.add('bg-[#1DD100]','text-white')
      //   e.target.removeEventListener('click',top)
      // }
      // else{
      //   console.log('pp');
      // }

    //   let item_name=  e.target.innerText
    //   item.classList.add('bg-[#1DD100]','text-white')
      

    //   e.target.removeEventListener('click',top)
    })
}


 function createDiv(text) {
   let div =document.createElement('div')
   let p1 =document.createElement('p')
   p1.innerText=text
   div.appendChild(p1)
   let p2=document.createElement('p')
   p2.innerText= 'Economy'
   div.appendChild(p2)
   let p3=document.createElement('p')
   p3.innerText=550
   p3.setAttribute('id','money')
   div.appendChild(p3)
   div.classList.add('flex','justify-between')
   return div
 }


 function discount(discountVlue) {
  let display_discount=document.getElementById('display_discount')
  let p1 =document.createElement('p')
  p1.innerText='Discount'
  display_discount.appendChild(p1)
  let p2 =document.createElement('p')
  p2.innerText=discountVlue
  display_discount.appendChild(p2)


 }
 

  function total(value) {
  let grand_total=document.getElementById('grand_total')
  let myValue=document.getElementById(value).innerText
  let total_price=document.getElementById('total-price')
  let integer_value=parseInt(myValue)
  sum+=integer_value
  // console.log(sum);
  total_price.innerText=sum
  grand_total.innerText=sum
 }



 document.getElementById('nextBtn').addEventListener('click',function() {
  location.reload()
})

  // if (click===4) {
  //   document.getElementById('my-coupon').removeAttribute('disabled')
  //   document.getElementById('apply').removeAttribute('disabled')
  //   let apply_button=document.getElementById('apply')
  //   let my_coupon=document.getElementById('my-coupon')

  //   apply_button.addEventListener('click',function () {
  //   let value_my_coupon=document.getElementById('my-coupon').value
  //   console.log( value_my_coupon);
  //   }) 
  // }
 
  // console.log(document.getElementById('number').removeAttribute('disabled'));
