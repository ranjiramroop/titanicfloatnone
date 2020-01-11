$(document).ready(function() {
  // Getting references to the name input and reviewer container, as well as the table body
  var nameInput = $("#reviewer-name");
  var reviewerList = $("tbody");
  var reviewerContainer = $(".reviewer-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Reviewer
  $(document).on("submit", "#reviewer-form", handleReviewerFormSubmit);
  $(document).on("click", ".delete-reviewer", handleDeleteButtonPress);

  // Getting the initial list of Reviewers
  getReviewers();

  // A function to handle what happens when the form is submitted to create a new Reviewer
  function handleReviewerFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput  
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    // Calling the upsertReviewer function and passing in the value of the name input
    upsertReviewer({
      name: nameInput.val().trim()
    });
  }

  // A function for creating an reviewer. Calls getReviewers upon completion
  function upsertReviewer(reviewerData) {
    $.post("/api/reviewer", reviewerData).then(getReviewers);
  }

  // Function for creating a new list row for reviewers
  function createReviewerRow(reviewerData) {
    var newTr = $("<tr>");
    newTr.data("reviewer", reviewerData);
    newTr.append("<td>" + reviewerData.name + "</td>");
    if (reviewerData.Posts) {
      newTr.append("<td> " + reviewerData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append(
      "<td><a href='/blog?reviewer_id=" +
        reviewerData.id +
        "'>Go to Posts</a></td>"
    );
    newTr.append(
      "<td><a href='/cms?reviewer_id=" +
        reviewerData.id +
        "'>Create a Post</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-reviewer'>Delete Reviewer</a></td>"
    );
    return newTr;
  }

  // Function for retrieving reviewers and getting them ready to be rendered to the page
  function getReviewers() {
    $.get("/api/reviewer", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createReviewerRow(data[i]));
      }
      renderReviewerList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of reviewers to the page
  function renderReviewerList(rows) {
    reviewerList
      .children()
      .not(":last")
      .remove();
    reviewerContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      reviewerList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no reviewers
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a Reviewer before you can create a Post.");
    reviewerContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("reviewer");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/reviewer/" + id
    }).then(getReviewers);
  }
});
