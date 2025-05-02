
# This is a reference for MongoDB connection

from pymongo import MongoClient
from pymongo.database import Database

# MongoDB connection string (replace password with the actual password)
MONGO_URI = "mongodb+srv://test-user:<umar123>@cluster0.wvtb7lz.mongodb.net/"
DATABASE_NAME = "connect_pro"

def get_db_connection() -> Database:
    """
    Create and return a MongoDB database connection
    """
    client = MongoClient(MONGO_URI)
    db = client[DATABASE_NAME]
    return db
