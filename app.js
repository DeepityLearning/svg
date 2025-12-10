function switchBulb(){
    const bulb = document.getElementById('bulb-circle');
    console.log(bulb)
    if(bulb.getAttribute('fill') === 'yellow'){
        bulb.setAttribute('fill', 'none')
    } else {
        bulb.setAttribute('fill', 'yellow')
    }
}