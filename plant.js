/**
 * Created by silasmartinez on 5/31/15.
 */
/**
 Javascript Object Refresher
 Create a plant that is an object.
 It starts out a seed.
 When you pour water onto it, the seed becomes a plant the first time it is watered and grows two inches every watering after.
 If you feed it plant food it grows one inch.
 If you feed it anti-freeze it dies.
 Stretch:
 It's max height is 12 inches. It will stay at 12 inches until it is watered more than four and it is feed more than 4 times then it dies.
 If you put it in the sun it flowers.
 If you take it out of the sun the flower goes away.
 */

var plant = {
    isPlant: false,
    isAlive: true,
    hasFlower: false,
    height : 0,
    maxHeight: 12,
    watersPastMax: 0,
    feedsPastMax: 0,
    grow: function(growth){
        if (plant.height < plant.maxHeight){
            plant.height +=growth;
            if (plant.height > plant.maxHeight) { plant.height = plant.maxHeight }
        }
    },
    water  : function(){
        plant.isPlant = true;
        if (plant.height < plant.maxHeight) {
            plant.grow(2);
        } else if (plant.watersPastMax < 4 && plant.feedsPastMax < 4){
            plant.watersPastMax++;
        } else if (plant.watersPastMax >= 4 && plant.feedsPastMax >= 4){
            plant.isAlive = false;
        }

    },
    feed   : function(food){
        if (food === "anti-freeze"){
            plant.isAlive = false;
        } else if (plant.isPlant && plant.height < plant.maxHeight) {
            plant.grow(1);
        } else if (plant.isPlant &&  plant.feedsPastMax < 4){
            plant.feedsPastMax++;
        } else  if (plant.watersPastMax >= 4 && plant.feedsPastMax >= 4){
            plant.isAlive = false;
        }
    },
    move : function(loc){
        plant.hasFlower =  loc === "sun";
    },
};

var flower = plant;
flower.feed("plant food");
flower.water();
flower.move("sun");
flower.water();
flower.move("shade");
flower.feed("plant food");
flower.feed("plant food");
flower.water();
flower.feed("plant food");
flower.water();
flower.move("sun");
flower.water();
flower.water();
flower.water();
flower.water();
flower.water();
flower.feed("plant food");
flower.water();
flower.feed("plant food");
flower.feed("plant food");
flower.feed("plant food");
flower.feed("plant food");