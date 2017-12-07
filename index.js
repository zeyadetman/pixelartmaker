var height = 0;
var width = 0;
var cellColor = 'black';

$('#creator').click(creation);
$('#color').val(cellColor);
$('#color').on('change',()=>{
    cellColor=$('#color').val();
});

function creation(){
    $('#pixels').remove();
    $('.canvasBox').append(`<table id="pixels">
                    </table>`)
    height = $('#height').val()*1;
    width = $('#width').val()*1;
    height = height<=30 ? height : 30;
    width = width<=50 ? width : 50;    
    var pixels = $('#pixels');
    for(var i=0;i<height;i++){
        var row = $(pixels).append('<tr></tr>');
        for(var j=0; j<width; j++){
            var cell = $(row).append(`<td class="pixel" id="cell${i}0000${j}e" onclick="color(cell${i}0000${j}e)" onmousedown="color(cell${i}0000${j}e)"></td>`);
        }
    }
}

function color(ss){
    $(`#${ss.id}`).css('background-color',cellColor);
}