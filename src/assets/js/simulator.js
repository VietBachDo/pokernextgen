var dict = {};
dict['1'] = ['<span class="selected-cards" onClick="print_id(1)">&#127186;</span>', false];
dict['2'] = ['<span class="selected-cards" style="color: red; ">&#127170;</span>', false];
dict['3'] = ['<span class="selected-cards" style="color: red; ">&#127154;</span>', false];
dict['4'] = ['<span class="selected-cards" >&#127138;</span>', false];
dict['5'] = ['<span class="selected-cards" >&#127187;</span>', false];
dict['6'] = ['<span class="selected-cards" style="color: red; ">&#127171;</span>', false];
dict['7'] = ['<span class="selected-cards" style="color: red; ">&#127155;</span>', false];
dict['8'] = ['<span class="selected-cards" >&#127139;</span>', false];
dict['9'] = ['<span class="selected-cards" >&#127188;</span>', false];
dict['10'] = ['<span class="selected-cards" style="color: red; ">&#127172;</span>', false];
dict['11'] = ['<span class="selected-cards" style="color: red; ">&#127156;</span>', false];
dict['12'] = ['<span class="selected-cards" >&#127140;</span>', false];
dict['13'] = ['<span class="selected-cards" >&#127189;</span>', false];
dict['14'] = ['<span class="selected-cards" style="color: red; ">&#127173;</span>', false];
dict['15'] = ['<span class="selected-cards" style="color: red; ">&#127157;</span>', false];
dict['16'] = ['<span class="selected-cards" >&#127141;</span>', false];
dict['17'] = ['<span class="selected-cards" >&#127190;</span>', false];
dict['18'] = ['<span class="selected-cards" style="color: red; ">&#127174;</span>', false];
dict['19'] = ['<span class="selected-cards" style="color: red; ">&#127158;</span>', false];
dict['20'] = ['<span class="selected-cards" >&#127142;</span>', false];
dict['21'] = ['<span class="selected-cards" >&#127191;</span>', false];
dict['22'] = ['<span class="selected-cards" style="color: red; ">&#127175;</span>', false];
dict['23'] = ['<span class="selected-cards" style="color: red; ">&#127159;</span>', false];
dict['24'] = ['<span class="selected-cards" >&#127143;</span>', false];
dict['25'] = ['<span class="selected-cards" >&#127192;</span>', false];
dict['26'] = ['<span class="selected-cards" style="color: red; ">&#127176;</span>', false];
dict['27'] = ['<span class="selected-cards" style="color: red; ">&#127160;</span>', false];
dict['28'] = ['<span class="selected-cards" >&#127144;</span>', false];
dict['29'] = ['<span class="selected-cards" >&#127193;</span>', false];
dict['30'] = ['<span class="selected-cards" style="color: red; ">&#127177;</span>', false];
dict['31'] = ['<span class="selected-cards" style="color: red; ">&#127161;</span>', false];
dict['32'] = ['<span class="selected-cards" >&#127145;</span>', false];
dict['33'] = ['<span class="selected-cards" >&#127194;</span>', false];
dict['34'] = ['<span class="selected-cards" style="color: red; ">&#127178;</span>', false];
dict['35'] = ['<span class="selected-cards" style="color: red; ">&#127162;</span>', false];
dict['36'] = ['<span class="selected-cards" >&#127146;</span>', false];
dict['37'] = ['<span class="selected-cards" >&#127195;</span>', false];
dict['38'] = ['<span class="selected-cards" style="color: red; ">&#127179;</span>', false];
dict['39'] = ['<span class="selected-cards" style="color: red; ">&#127163;</span>', false];
dict['40'] = ['<span class="selected-cards" >&#127147;</span>', false];
dict['41'] = ['<span class="selected-cards" >&#127197;</span>', false];
dict['42'] = ['<span class="selected-cards" style="color: red; ">&#127181;</span>', false];
dict['43'] = ['<span class="selected-cards" style="color: red; ">&#127165;</span>', false];
dict['44'] = ['<span class="selected-cards" >&#127149;</span>', false];
dict['45'] = ['<span class="selected-cards" >&#127198;</span>', false];
dict['46'] = ['<span class="selected-cards" style="color: red; ">&#127182;</span>', false];
dict['47'] = ['<span class="selected-cards" style="color: red; ">&#127166;</span>', false];
dict['48'] = ['<span class="selected-cards" >&#127150;</span>', false];
dict['49'] = ['<span class="selected-cards" >&#127185;</span>', false];
dict['50'] = ['<span class="selected-cards" style="color: red; ">&#127169;</span>', false];
dict['51'] = ['<span class="selected-cards" style="color: red; ">&#127153;</span>', false];
dict['52'] = ['<span class="selected-cards" >&#127137;</span class="selected-cards">', false];

var myArray = [];


function print_id(id){
  if(myArray.length < 4 && dict[id][1 ] == false){

      dict[id][1] = true;
      myArray.push(id);
      $( "#append" ).append( dict[id][0] );
      let mainCard = document.querySelectorAll('[card-id="'+id+'"]')[0].lastElementChild;
      let mainCardClone = document.querySelectorAll('[card-id="'+id+'"]')[1].lastElementChild;
      mainCard.style.opacity = "0.3"
      mainCardClone.style.opacity = "0.3"
      //document.querySelectorAll('[card-id="1"]')[1].style.visibility = "hidden";
      //card.classList.add("selectedCard")
      //cardCloned.classList.add("selectedCard")
  } else if(myArray.length > 0 && dict[id][1] == true) {
    console.log('works')
    console.log(id)
    dict[id][1] = false;
    for (let i = 0; i <= myArray.length; i++) {
      if (myArray[i] == id) {
        myArray.splice(i, 1)
        break;
      }
    }
    $( "#append" ).remove( dict[id][1] )
    let mainCard = document.querySelectorAll('[card-id="'+id+'"]')[0].lastElementChild;
    let mainCardClone = document.querySelectorAll('[card-id="'+id+'"]')[1].lastElementChild;
    mainCard.style.opacity = "1"
    mainCardClone.style.opacity = "1"

  } else if(myArray.length > 4) {
    alert("You have already chosend 4 cards, please remove one");
  }
}
