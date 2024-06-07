from rest_framework import serializers
from rest_enumfield import EnumField
from app.models import *

class UserSerializer(serializers.Serializer):
    
    DATE        = serializers.DateField()                   # "23.04.2024"
    TIME_WORK   = serializers.CharField(allow_blank=False)  # "20:00-08:00"
    ID          = serializers.IntegerField(min_value=1)     # "142"
    FIO         = serializers.CharField(allow_blank=False)  # "Болотов Г.Е."
    UCHASTOK    = EnumField(choices=Uchastok)               # "ЦУ-3 (Н)"
    SMENA       = serializers.CharField(allow_blank=False)  # "2Н"
    RANK        = serializers.CharField(allow_blank=False)  # "ЦСИ"
    SEX         = EnumField(choices=Sex)                    # "Мужской"
    
    def create(self) -> User:
        return User(self.validated_data)


class BidSerializer(serializers.Serializer):
    
    id          = serializers.IntegerField(min_value=1)     # "477354"
    id_pas      = serializers.IntegerField(min_value=1)     # "11058"
    datetime    = serializers.DateTimeField()               # "24.04.2024 7:30:00"
    time3       = serializers.TimeField()                   # "07:13:52"
    time4       = serializers.TimeField()                   # "07:51:11"
    cat_pas     = EnumField(choices=PasCat)                 # "ИЗТ"
    status      = EnumField(choices=BidStat)                # "Заявка закончена"
    tpz         = serializers.CharField(allow_blank=False)  # "15.03.2024 22:48:43"
    INSP_SEX_M  = serializers.IntegerField(min_value=0)     # "0"
    INSP_SEX_F  = serializers.IntegerField(min_value=0)     # "1"
    TIME_OVER   = serializers.TimeField()                   # "00:52:20"
    id_st1      = serializers.IntegerField(min_value=1)     # "5"
    id_st2      = serializers.IntegerField(min_value=1)     # "97
    
    def create(self) -> Bid:
        return Bid(self.validated_data)