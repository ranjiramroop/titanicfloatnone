var $wishTitle = $(".wish-title");
var $wishText = $(".wish-textarea");
var $saveWishBtn = $(".save-wish");
var $newWishBtn = $(".new-Wish");
var $wishList = $(".list-container .list-group");

// activeWish is used to keep track of the wish in the textarea
var activeWish = {};

// A function for getting all wishes from the db
var getWishes = function() {
  return $.ajax({
    url: "/api/wishlistpage",
    method: "GET"
  });
};

// A function for saving a wish to the db
// var saveWish = function(wish) {
//   return $.ajax({
//     url: "/api/wishlist",
//     data: wish,
//     method: "POST"
//   });
// };

// A function for deleting a wish from the db
var deleteWish = function(id) {
  return $.ajax({
    url: "api/wishlistpage/" + id,
    method: "DELETE"
  });
};

// If there is an activeWish, display it, otherwise render empty inputs
var renderActiveWish = function() {
  $saveWishBtn.hide();

  if (activeWish.id) {
    $wishTitle.attr("readonly", true);
    $wishText.attr("readonly", true);
    $wishTitle.val(activeWish.title);
    $wishText.val(activeWish.text);
  } else {
    $wishTitle.attr("readonly", false);
    $wishText.attr("readonly", false);
    $wishTitle.val("");
    $wishText.val("");
  }
};

// Get the wish data from the inputs, save it to the db and update the view
var handleWishSave = function() {
  var newWish = {
    title: $wishTitle.val(),
    text: $wishText.val()
  };

  saveWish(newWish).then(function(data) {
    getAndRenderWishes();
    renderActiveWish();
  });
};

// Delete the clicked wish
var handleWishDelete = function(event) {
  // prevents the click listener for the list from being called when the button inside of it is clicked
  event.stopPropagation();

  var wish = $(this)
    .parent(".list-group-item")
    .data();

  if (activeWish.id === wish.id) {
    activeWish = {};
  }

  deleteWish(wish.id);
  getAndRenderWishes();
  renderActiveWish();
};

// Sets the activeWish and displays it
var handleWishView = function() {
  activeWish = $(this).data();
  renderActiveWish();
};

// Sets the activeWish to and empty object and allows the user to enter a new wish
var handleNewWishView = function() {
  activeWish = {};
  renderActiveWish();
};

// If a wish's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  if (!$wishTitle.val().trim() || !$wishText.val().trim()) {
    $saveWishBtn.hide();
  } else {
    $saveWishBtn.show();
  }
};

// Render's the list of wish titles
var renderWishList = function(wishes) {
  $wishList.empty();

  var wishListItems = [];
  //   for (var i = 0; i < wishes.length; i++) {
  //     var wish = wishes[i];

  //     var $li = $("<li class='list-group-item'>").data(wish);
  //     var $span = $("<span>").text(wish.title);
  //     var $delBtn = $(
  //       "<i class='fas fa-trash-alt float-right text-danger delete-wish'>"
  //     );

  //     $li.append($span, $delBtn);
  //     wishListItems.push($li);
  //   }

  //   $wishList.append(wishListItems);
  // };
  for (var i = 0; i < wishes.length; i++) {
    //     // Constructing HTML containing the state information
    console.log(wishes);
    var card =
      `<div class="col-lg-5 col-md-6 mb-4">

        <div class="card-body">
          <h4 class="card-title">` +
      wishes[i].fullName +
      ` </h4>
          <p class="card-text">
            ` +
      wishes[i].description.substring(0, 200) +
      `...
          </p>
        </div>
        <div class="card-footer wishlist-footer">
          <a href="` +
      wishes[i].url +
      `" target="_blank" class="btn btn-primary">Go to Website</a><br><br>
        </div>
      </div>
      `;

    $(".cardContainer").append(card);
  }
};
// Gets wishes from the db and renders them to the sidebar
var getAndRenderWishes = function() {
  return getWishes().then(function(data) {
    console.log(data);
    renderWishList(data);
  });
};

$saveWishBtn.on("click", handleWishSave);
$wishList.on("click", ".list-group-item", handleWishView);
$newWishBtn.on("click", handleNewWishView);
$wishList.on("click", ".delete-wish", handleWishDelete);
$wishTitle.on("keyup", handleRenderSaveBtn);
$wishText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of wishes
getAndRenderWishes();
