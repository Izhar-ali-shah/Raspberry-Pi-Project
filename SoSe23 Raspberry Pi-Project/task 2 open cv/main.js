/**
 * Updates the current color, distance and motor status calling
 * the corresponding methods.
 */
function updateStatus() {
  // Update current color based on Open CV

  (async () => await updateCurrentColorOpenCV())();
  // Update motor status
  (async () => await updateMotorStatus())();

  // Update current color based on OpenCV
  (async () => await updateCurrentColorDistance())();
  //...

  // Update current distance
  (async () => await updateDistance())();
  //...
}

/**
 * Update the current color based on OpenCV.
 */
async function updateCurrentColorOpenCV() {
  try {
    // Request color from server
    const requestResult = await requestColorFromOpenCV();
    // Get the HTML element where the status is displayed
    const blue_open_cv = document.getElementById("blue_open_cv");
    blue_open_cv.innerHTML = requestResult.data[0];
    const purple_open_cv = document.getElementById("purple_open_cv");
    purple_open_cv.innerHTML = requestResult.data[1];
    const yellow_open_cv = document.getElementById("yellow_open_cv");
    yellow_open_cv.innerHTML = requestResult.data[2];
    const green_open_cv = document.getElementById("green_open_cv");
    green_open_cv.innerHTML = requestResult.data[3];
  } catch (e) {
    console.log("Error getting the color based on OpenCV", e);
    updateStatus("Error getting the color based on OpenCV");
  }
}

/**
 * Function to request the server to update the current
 * color based on OpenCV.
 */
function requestColorFromOpenCV() {
  try {
    // Make request to server
    return axios.get("/get_color_from_opencv");
  } catch (e) {
    console.log("Error getting the status", e);
    updateStatus("Error getting the status");
  }
}

/**
 * Function to request the server to start the motor.
 */
function requestStartMotor() {
  try {
    return axios.get("/start_motor");
  } catch (error) {
    console.log("Error: ", error);
  }
}

/**
 * Function to request the server to stop the motor.
 */
function requestStopMotor() {
  try {
    return axios.get("/stop_motor");
  } catch (error) {
    console.log("Error: ", error);
  }
}

/**
 * Update the status of the motor.
 * @param {String} status
 */
function updateMotorStatus(status) {
  // Get the HTML element where the status is displayed
  axios.get("/motor_status").then((response) => {
    const motor_status_html_element = document.getElementById("motorStatus");
    if (response.data.success) {
      motor_status_html_element.innerHTML =
        "Motor Running and Rotating at " + response.data.position;
    } else {
      motor_status_html_element.innerHTML = "Motor Stopped";
    }
  });
}

/**
 * Update the current color based on distance sensor.
 */
function updateDistance() {
  // Get the HTML element where the status is displayed
  // ...
  try {
    const distance_element = document.getElementById("distance");
    distance_element.innerHTML =
      " Calculating Please Wait... (May take upto 1 Minute)";

    console.log("Accessing");
    const distanceData = await requestDistance();
    console.log(distanceData);

    distance_element.innerHTML = " " + distanceData.data;
    //updateCurrentColorDistance()
  } catch (e) {
    console.log("Wrong distance", e);
  }
}

/**
 * Function to request the server to get the distance from
 * the rod to the ultrasonic sensor.
 */
function requestDistance() {
  //...
}

/**
 * Update the current color based on distance sensor.
 */
function updateCurrentColorDistance() {
  // Get the HTML element where the status is displayed
  // ...
  try {
    // Request color from server
    const requestResult = await requestShapeFromDistance();
    // Get the HTML element where the status is displayed
    const green_distance = document.getElementById("triangle_from_distance");
    green_distance.innerHTML = requestResult.data[0];
    const purple_distance = document.getElementById("square_from_distance");
    purple_distance.innerHTML = requestResult.data[1];
    const yellow_distance = document.getElementById("circle_from_distance");
    yellow_distance.innerHTML = requestResult.data[2];
  } catch (e) {
    console.log("Error getting the color based on distance", e);
    // updateStatus('Error getting the color based on distance')
  }
}

/**
 * Function to request the server to get the color based
 * on distance only.
 */
function requestColorFromDistance() {
  //...
}
