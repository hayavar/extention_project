from flask import Flask, jsonify,request
import time
from flask_cors import CORS





app=Flask(__name__)
cros=CORS(app,resources={r"/*":{"origins":"*"}},methods=['GET','POST','OPTIONS'],allow_headers=['Content-Type','application/json'],supports_credentials=True)
@app.route('/login',methods=['POST'])
def login():
	data=request.get_json()
	text=data['text']
	print(text)
	mytext=['hello world.','this is my extension.']

	if text in mytext:
		return "Correct statement ",200
	else:
		return "you are wrong",200


	



	
if __name__=='__main__':
	app.run(debug=True)


