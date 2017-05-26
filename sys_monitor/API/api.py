from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from API.modules import disk


app = Flask(__name__)
api = Api(app)
CORS(app)


class SysBase(Resource):
    def get(self):
        return disk()

api.add_resource(SysBase, '/base')


if __name__ == "__main__":
    app.run(debug=True)
