USE_FAKE_GPIO = True # Chage to FALSE if testing in the Raspberry Pi

if USE_FAKE_GPIO:
    from .fake_gpio import GPIO  # For running app
else:
    import RPi.GPIO as GPIO  # For testing in Raspberry Pi


# import ...

class SensorController:

    def __init__(self):
        self.PIN_TRIGGER = 18  # do not change
        self.PIN_ECHO = 24  # do not change
        self.distance = None
        self.color_from_distance = [False, False, False, False]
        print('Sensor controller initiated')

    def track_rod(self):
        # ...
        print('Monitoring')

    def get_distance(self):
        return self.distance

    def get_color_from_distance(self):
        return self.color_from_distance
