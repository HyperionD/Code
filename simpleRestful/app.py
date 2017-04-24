from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': 'Test One'
    },
    {
        'id': 2,
        'title': 'Test Two'
    }
]


@app.route('/test/', methods=['GET'])
def get_tasks():
    task = {'a': '中文', 'b': '测试'}
    resp = jsonify(task)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.run(debug=True)
