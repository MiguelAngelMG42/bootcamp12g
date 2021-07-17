$(document).ready(() => {

    $('#stop').click(() => {
        $('#semaforo').removeClass();
        $('#semaforo').addClass('alert alert-danger d-flex mt-5');
    });

    $('#wait').click(() => {
        $('#semaforo').removeClass();
        $('#semaforo').addClass('alert alert-warning d-flex mt-5');
    });

    $('#advance').click(() => {
        $('#semaforo').removeClass();
        $('#semaforo').addClass('alert alert-success d-flex mt-5');
    });
    
})