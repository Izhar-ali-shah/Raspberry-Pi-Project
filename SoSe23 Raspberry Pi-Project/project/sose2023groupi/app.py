import time

import flask
from flask import Flask, render_template, Response, request, jsonify
import logging
import gevent
import cv2
from task1_opencv_control.modules.opencv_controller import OpenCVController
from task2_motor_control.modules.motor_controller import MotorController
from task3_sensor_control.modules.sensor_controller import SensorController

app = Flask(__name__)
motor_controller = MotorController()
opencv_controller = OpenCVController()
sensor_controller = SensorController()

@app.route('/')
def index():
    """Server view to access the app and display the index template."""
    return render_template('index.html')


# Video Streaming Generator
BOUNDARY = 'frame'
ENCAPSULATION_BOUNDARY = b'\r\n--' + BOUNDARY.encode() + b'\r\n'
MIME_HEADER = b'Content-Type: image/jpeg\r\n\r\n'


def get_frames():
    while True:
        frame_gen = opencv_controller.process_frame()

        ret, buffer = cv2.imencode('.jpg', frame_gen)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result
#       time.sleep(0.5)


@app.route('/video_feed')
def video_feed():
    """Server view to access the app and display the index template."""
    return Response(get_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/get_color_from_opencv')
def get_color_from_opencv():
    """Server view to determine the current color zone using
        the opencv_controller.
    """
    return jsonify(opencv_controller.get_current_color())


@app.route('/start_motor')
def start_motor():
    """Server view to start the motor."""
    # ...
    return {'success': True}


@app.route('/stop_motor')
def stop_motor():
    """Server view to stop the motor."""
    # ...
    return {'success': True}


@app.route('/motor_status')
def motor_status():
    """Server view to get status of the motor (working or not working)."""
    # ...
    return {'success': True}


@app.route('/get_distance')
def get_distance():
    """Server view to calculate the current distance using
        the sensor_controller.
    """
    # ...
    return {'success': True}


@app.route('/get_color_from_distance')
def get_color_from_distance():
    """Server view to determine the current color zone using
        the sensor_controller.
    """
    # ...
    return {'success': True}


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, use_reloader=False)
