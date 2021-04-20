function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  var latitude = document.querySelector("#latitude").value;

  // store the value for long latitude
  var longlatitude = document.querySelector("#longitude").value;

  //variable to show error for latitude
  var errorLat = document.getElementById("latt");

  //variable to show error for long latitude
  var errorLong = document.getElementById("labb");

  if (errorLat.childNodes.length > 1) {
    errorLat.removeChild(errorLat.lastChild);
  }

  if (errorLong.childNodes.length > 1) {
    errorLong.removeChild(errorLong.lastChild);
  }

  if (latitude) {
    if (!isNaN(latitude)) {
      var Num = parseFloat(latitude);
      var Num2 = parseFloat(longlatitude);
      // number should be between -90 to 90
      if (Num >= -90 && Num <= 90) {
        if (longlatitude) {
          if (!isNaN(longlatitude)) {
            // long latitude should be between -180 to 180
            if (Num2 >= -180 && Num2 <= 180) {
              return true;
            } else {
              // error message for long latitude
              var txt = document.createTextNode(
                " must be a valid Longitude (-180 to 180)"
              );
              errorLong.appendChild(txt);
              return false;
            }
          } else {
            // error message for long latitude
            var txt = document.createTextNode(
              " must be a valid Longitude (-180 to 180)"
            );
            errorLong.appendChild(txt);
            return false;
          }
        }
      } else {
        //error mesg for latitude
        var txt = document.createTextNode(
          " must be a valid Latitude (-90 to 90)"
        );
        errorLat.appendChild(txt);
        return false;
      }
    } else {
      //error mesg for latitude
      var txt = document.createTextNode(
        " must be a valid Latitude (-90 to 90)"
      );
      errorLat.appendChild(txt);
      return false;
    }
  }
}
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
