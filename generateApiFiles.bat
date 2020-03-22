docker run --rm -v %cd%\src\app\_service\api:/local openapitools/openapi-generator-cli generate ^
    -i https://raw.githubusercontent.com/symptomtracker/backend/mongodb-anbindung/res/api/patient/Symptom-tracker_patient_api-1.0.0-swagger.json ^
    -g  typescript-axios ^
    -o /local
    