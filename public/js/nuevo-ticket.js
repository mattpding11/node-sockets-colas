
// Referencias HTML

const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();


socket.on('connect', () => {
    // console.log('Conectado');.
    btnCrear.disabled = false;

});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    btnCrear.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerHTML = "Ticket <span style='color:#1095c1'>"+ultimo+"</span>";
})

btnCrear.addEventListener( 'click', () => {
    const audio = new Audio('./audio/new-ticket.mp3');
    audio.play();

    socket.emit( 'siguiente-ticket', null, ( ticket) => {
        const numTicke = ticket.split(' ')[1]
        lblNuevoTicket.innerHTML = "Ticket <span style='color:#1095c1'>"+numTicke+"</span>";
    });

});