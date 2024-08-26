/**
 * Updates the current color, distance and motor status calling
 * the corresponding methods.
 */
function updateStatus() {
    // Update current color based on Open CV

    (async () => await updateCurrentColorOpenCV())();
    // Update motor status
    //...

    // Update current color based on OpenCV
    //...

    // Update current distance
    //...

}

/**
 * Update the current color based on OpenCV.
 */
async function updateCurrentColorOpenCV() {
    try {
        // Request color from server
        const requestResult = await requestColorFromOpenCV()
        // Get the HTML element where the status is displayed
        const blue_open_cv = document.getElementById('blue_open_cv')
        blue_open_cv.innerHTML = requestResult.data[0]
        const purple_open_cv = document.getElementById('purple_open_cv')
        purple_open_cv.innerHTML = requestResult.data[1]
        const yellow_open_cv = document.getElementById('yellow_open_cv')
        yellow_open_cv.innerHTML = requestResult.data[2]
        const green_open_cv = document.getElementById('green_open_cv')
        green_open_cv.innerHTML = requestResult.data[3]

    } catch (e) {
        console.log('Error getting the color based on OpenCV', e)
        updateStatus('Error getting the color based on OpenCV')
    }
}

/**
 * Function to request the server to update the current
 * color based on OpenCV.
 */
function requestColorFromOpenCV() {
    try {
        // Make request to server
        return axios.get('/get_color_from_opencv')
    } catch (e) {
        console.log('Error getting the status', e)
        updateStatus('Error getting the status')

    }
}


/**
 * Function to request the server to start the motor.
 */
function requestStartMotor() {
    //...
}


/**
 * Function to request the server to stop the motor.
 */
function requestStopMotor() {
    //...
}

/**
 * Update the status of the motor.
 * @param {String} status
 */
function updateMotorStatus(status) {
    // Get the HTML element where the status is displayed
    // ...
}

/**
 * Update the current color based on distance sensor.
 */
function updateDistance() {
    // Get the HTML element where the status is displayed
    // ...
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
}


/**
 * Function to request the server to get the color based
 * on distance only.
 */
function requestColorFromDistance() {
    //...
}
