var canvas= new fabric.Canvas("myCanvas");
 
block_width=20;
block_height=20;

player_X=10;
player_Y=10;

player_object="";
block_object="";
 function player_object()
{
    fabric.Image.fromURL("Hulk.jpg", function(img){
        player_object= img
        ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(img){
        block_object= img
        ;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(140);
        block_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_object);
    });
}