from rest_framework import serializers
from Fci_App.models.transaction import Transaction
from Fci_App.serializers.user import UserSerializer
from Fci_App.serializers.crop_register import Crop_registerSerializer



class TransactionSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)

    class Meta:
        model = Transaction
        fields = '__all__'

class TransactionVerboseSerializer(serializers.ModelSerializer):
    # projects = ProjectOnlySerializer(many=True,read_only=True)
    dealer = UserSerializer(read_only=True)
    farmer = UserSerializer(read_only=True)
    crop_register = Crop_registerSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ['id', 'dealer', 'farmer', 'status', 'price', 'crop_register', 'deal_Date', 'created_at', 'delivery_date']
       

    