import logging
import threading
import cv2

USE_FAKE_PI_CAMERA = False # Chage to FALSE if testing in the Raspberry Pi

if USE_FAKE_PI_CAMERA:
    from .camera import Camera  # For running app
else:
    from .pi_camera import Camera  # For running Raspberry Pi

log = logging.getLogger(
    __name__)  # Creates a logger instance, we use it to log things out


class OpenCVController(object):

    def __init__(self):
        self.current_color = [False, False, False, False]
        self.camera = Camera()
        print('OpenCV controller initiated')

    def process_frame(self):  # generate frame by frame from camera
        while True:
            # Capture frame-by-frame
            frame = self.camera.get_frame()  # read the camera frame


            ###Process frame here

            return frame


    def get_current_color(self):
        return self.current_color
