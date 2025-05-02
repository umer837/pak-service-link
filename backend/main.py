
# This is a reference for the FastAPI backend implementation
# You would need to run this separately from the React frontend

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, timedelta
import jwt
from passlib.context import CryptContext
from bson.objectid import ObjectId

from .db import get_db_connection
from .models import UserCreate, UserResponse, ServiceProviderCreate, ServiceProviderResponse

app = FastAPI(title="ConnectPro API")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security setup
SECRET_KEY = "your-secret-key"  # In production, use a secure environment variable
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Database connection
db = get_db_connection()

# Authentication utilities
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# API Endpoints
@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    users_collection = db["users"]
    user = users_collection.find_one({"email": form_data.username})
    
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": form_data.username, "role": user["role"]},
        expires_delta=access_token_expires,
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/signup/client", response_model=UserResponse)
async def create_client(user: UserCreate):
    users_collection = db["users"]
    existing_user = users_collection.find_one({"email": user.email})
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(user.password)
    user_data = user.dict()
    user_data["hashed_password"] = hashed_password
    user_data["role"] = "client"
    user_data["created_at"] = datetime.utcnow()
    
    del user_data["password"]
    
    result = users_collection.insert_one(user_data)
    
    user_data["id"] = str(result.inserted_id)
    
    return UserResponse(**user_data)

@app.post("/signup/provider", response_model=ServiceProviderResponse)
async def create_service_provider(provider: ServiceProviderCreate):
    users_collection = db["users"]
    existing_user = users_collection.find_one({"email": provider.email})
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(provider.password)
    provider_data = provider.dict()
    provider_data["hashed_password"] = hashed_password
    provider_data["role"] = "provider"
    provider_data["created_at"] = datetime.utcnow()
    
    del provider_data["password"]
    
    result = users_collection.insert_one(provider_data)
    
    provider_data["id"] = str(result.inserted_id)
    
    return ServiceProviderResponse(**provider_data)

@app.get("/")
def read_root():
    return {"message": "Welcome to ConnectPro API"}

# Additional endpoints for a complete API would include:
# - GET /providers - to list all service providers
# - GET /providers/{service_type} - to filter providers by service type
# - POST /bookings - to create a new booking
# - GET /bookings/client/{client_id} - to get bookings for a client
# - GET /bookings/provider/{provider_id} - to get bookings for a provider
# - etc.
