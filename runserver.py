import os
from hatServer import app

def runserver():
   # port = int(os.environ.get('PORT', 5000))
    app.run()

if __name__ == '__main__':
    runserver()
