function enterText() {
    $('#js-shopping-list-form').find('button').on('click', function(event) {
        const newItemText = $('input').val();
        event.preventDefault();
        $('ul').append(
            `<li>
        <span class="shopping-item">${newItemText}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
            );
    });
}
// html method, append method
function checkHandler() {

    $('ul').on('click', '.shopping-item-toggle', function (event) {
        const itemCheck = $(this).parent().closest('li').find('.shopping-item');
        event.stopPropagation();
        $(itemCheck).toggleClass('shopping-item__checked');
    });
}

function deleteHandler() {
    
   $('ul').on('click', '.shopping-item-delete', function(event) {
    const itemDiv = $(this).closest('li');
       event.stopPropagation();
       $(itemDiv).remove();
   });
}


deleteHandler();
checkHandler();
enterText();

