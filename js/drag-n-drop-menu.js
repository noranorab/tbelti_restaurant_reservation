const items = document.querySelectorAll('.sub_sub_meal');
const containers = document.querySelectorAll('.container');

let draggedItem = null;

for(let i = 0; i<items.length; i++){
    const item = items[i];

    item.addEventListener('dragstart', function (e){
        console.log('dragstart', e);
        draggedItem = item;
        setTimeout(function () {
            this.style.display = 'none';
        }, 0)
        
    });

    item.addEventListener('dragend', function(){
        console.log('dragend');
        setTimeout(function(){
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    })

    for (let j=0; j<containers.length;i++){
        const container = containers[j];

        container.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        container.addEventListener('dragenter', function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgda(0, 0, 0 , 0.2)';
        });
        container.addEventListener('dragleave', function(e){
            this.style.backgroundColor = 'rgda(0, 0, 0 , 0.2)';

        })
        container.addEventListener('drop', function(e){
            console.log('drop');
            this.append(draggedItem);
        });
    }
}