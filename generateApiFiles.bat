docker run --rm -v %cd%\src\app\_service\api:/local openapitools/openapi-generator-cli generate ^
    -i https://raw.githubusercontent.com/symptomtracker/backend/patient_client_api/res/api/patient/Symptom_Tracker_Patient_API-1.0.0-swagger.json ^
    -g  typescript-axios ^
    -o /local
    