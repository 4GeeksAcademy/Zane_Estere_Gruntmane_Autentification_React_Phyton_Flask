"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/token', methods=['POST'])
def create_token():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
@api.route("/test", methods=["GET"])
def test():
    print("testing")
    return jsonify("test")

@api.route("/users", methods=["GET"])
def getUsers():
    users = User.query.all()
    user = [user.serialize() for user in users]
    return jsonify(user)

@api.route("/signup", methods=["POST"])
def sign_up ():
    data = request.json 
    print (data)
    user_email = request.json.get("email", None)
    password = request.json.get("password", None)
    print (user_email, password)

    if "email" not in data or "password" not in data:
        return jsonify({"error": "User email and password are required"}), 400
    new_user = User(email=user_email, password=password, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    access_token = create_access_token(identity=new_user.id)
    return jsonify({ "token": access_token, "user_id": new_user.id}), 200

@api.route("/login", methods=["POST"])
def login():
    data = request.json
    user_email = data.get("email", None)
    password = data.get("password", None)
    user = User.query.filter_by(email=user_email, password=password).first()
   
    if not user:
        return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id}), 200

@api.route("/private", methods=["GET"])
@jwt_required()
def private():
    id = get_jwt_identity ()
    if id is not None:
        user = User.query.get(id) 
        if user: 
            return jsonify({"data": user.serialize()}), 200
        else: 
            return jsonify({"error": "User not found"}), 404
    else:
        return jsonify({"error": "Unauthorized"}), 401
