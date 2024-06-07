from rest_framework.viewsets import ViewSet
from app.serializers import *
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, extend_schema_view
from rest_framework.decorators import action


@extend_schema_view(
    regUser = extend_schema(summary="Register new user", request=UserSerializer, responses=serializers.Serializer),
    regBid  = extend_schema(summary="Register new bid",  request=BidSerializer,  responses=serializers.Serializer),
)
class Service(ViewSet):
    
    @action(detail=True)
    def regUser(self, request):
        ser = UserSerializer(data=request.data)
        return Response(data={f"Created User: {ser.create().__dict__}"}) if ser.is_valid() else Response(data={f"UserSerializer failed on: {request.data}"})
    
    @action(detail=True)
    def regBid(self, request):
        ser = BidSerializer(data=request.data)
        return Response(data={f"Created Bid: {ser.create().__dict__}"}) if ser.is_valid() else Response(data={f"BidSerializer failed on: {request.data}"})