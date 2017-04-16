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


@app.route('/test/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_tasks(task_id):
    task = []
    for t in tasks:
        if t['id'] == task_id:
            task = t
    resp = jsonify({'task': task})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.run(debug=True)
