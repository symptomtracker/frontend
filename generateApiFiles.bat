docker run --rm -v %cd%\src\app\_service\api:/local openapitools/openapi-generator-cli generate ^
    -i https://raw.githubusercontent.com/symptomtracker/backend/mongodb-anbindung/symptomtracker-backend/api/swagger.yaml ^
    -g  typescript-axios ^
    -o /local
    