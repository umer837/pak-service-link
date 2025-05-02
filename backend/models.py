
# This is a reference for Pydantic models for FastAPI

from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class ServiceType(str, Enum):
    PHOTOGRAPHER = "photographer"
    VIDEOGRAPHER = "videographer"
    EVENT_ORGANIZER = "event_organizer"

class UserBase(BaseModel):
    name: str
    email: EmailStr
    phone: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: str
    role: str
    created_at: datetime

class ServiceProviderBase(UserBase):
    service_type: ServiceType
    description: Optional[str] = None

class ServiceProviderCreate(ServiceProviderBase):
    password: str

class ServiceProviderResponse(ServiceProviderBase):
    id: str
    role: str
    created_at: datetime

class BookingStatus(str, Enum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class BookingCreate(BaseModel):
    client_id: str
    provider_id: str
    service_type: ServiceType
    date: datetime
    description: str
    location: str

class BookingResponse(BookingCreate):
    id: str
    status: BookingStatus
    created_at: datetime
    updated_at: Optional[datetime] = None
