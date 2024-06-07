import datetime
from enum import Enum
from rest_framework import serializers


class Sex(Enum):
    MALE   = "Мужской"
    FEMALE = "Женский"

class Uchastok(Enum):
    CU1  = "ЦУ-1"
    CU2  = "ЦУ-2"
    CU3  = "ЦУ-3"
    CU3N = "ЦУ-3 (Н)"
    CU4  = "ЦУ-4"
    CU4N = "ЦУ-4 (Н)"
    CU5  = "ЦУ-5"
    CU8  = "ЦУ-8"

class User:
    
    DATE        = datetime  # "23.04.2024"
    TIME_WORK   = datetime  # "20:00-08:00"
    ID          = int       # "142"
    FIO         = str       # "Болотов Г.Е."
    UCHASTOK    = Uchastok  # "ЦУ-3 (Н)"
    SMENA       = str       # "2Н"
    RANK        = str       # "ЦСИ"
    SEX         = Sex       # "Мужской"
    
    def __init__(self, params) -> None:
        self.DATE       = params.get("DATE")
        self.TIME_WORK  = params.get("TIME_WORK")
        self.ID         = params.get("ID")
        self.FIO        = params.get("FIO")
        self.UCHASTOK   = params.get("UCHASTOK").value
        self.SMENA      = params.get("SMENA")
        self.RANK       = params.get("RANK")
        self.SEX        = params.get("SEX").value
    
    
class PasCat(Enum):
    IZT = "ИЗТ"
    IZ  = "ИЗ"
    IS  = "ИС"
    IK  = "ИК"
    IO  = "ИО"
    DI  = "ДИ"
    PL  = "ПЛ"
    RD  = "РД"
    RDK = "РДК"
    OGD = "ОГД"
    OV  = "ОВ"
    IU  = "ИУ"
    
class BidStat(Enum):
    accepted    = "Принята"
    on_his_way  = "Инспектор выехал"
    on_place    = "Инспектор на месте"
    in_progress = "Поездка"
    ended       = "Заявка закончена"
    pas_is_late = "Пассажир опаздывает"
    ins_is_late = "Инспектор опаздывает"
    
class Bid:

    id          = int       # "477354"
    id_pas      = int       # "11058"
    datetime    = datetime  # "24.04.2024 7:30:00"
    time3       = datetime  # "07:13:52"
    time4       = datetime  # "07:51:11"
    cat_pas     = PasCat    # "ИЗТ"
    status      = BidStat   # "Заявка закончена"
    tpz         = str       # "15.03.2024 22:48:43"
    INSP_SEX_M  = int       # "0"
    INSP_SEX_F  = int       # "1"
    TIME_OVER   = datetime  # "00:52:20"
    id_st1      = int       # "5"
    id_st2      = int       # "97
    
    def __init__(self, params) -> None:
        self.id         = params.get("id")
        self.id_pas     = params.get("id_pas")
        self.datetime   = params.get("datetime")
        self.time3      = params.get("time3")
        self.time4      = params.get("time4")
        self.cat_pas    = params.get("cat_pas").value
        self.status     = params.get("status").value
        self.tpz        = params.get("tpz")
        self.INSP_SEX_M = params.get("INSP_SEX_M")
        self.INSP_SEX_F = params.get("INSP_SEX_F")
        self.TIME_OVER  = params.get("TIME_OVER")
        self.id_st1     = params.get("id_st1")
        self.id_st2     = params.get("id_st2")