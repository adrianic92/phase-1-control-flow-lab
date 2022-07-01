function scuberGreetingForFeet(height){
  let phrase;
  if (height <= 400) {
    phrase = 'This one is on me!';
  } else if ((height > 400) && (height < 2000)) {
    phrase = 'That will be twenty bucks.';
  } else if ((height => 2000) && (height <= 2500)) {
    phrase = 'I will gladly take your thirty bucks.';
  } else if (height > 2500) {
    phrase = 'No can do.'
  }
  return phrase
}

function ternaryCheckCity(city){
  let where;
  if (city === 'NYC') {
    where = 'Ok, sounds good.';
  }
  else if (city !== 'NYC') {
    where = 'No go.';
  }
  return where;
}

function switchOnCharmFromTip(tip){
  let sentence;
  switch (tip) {
    case 'generous':
      sentence = 'Thank you so much.';
      break
    case 'not as generous':
      sentence = 'Thank you.';
      break
    default:
      sentence = 'Bye.';
      break
  }
  return sentence;
}