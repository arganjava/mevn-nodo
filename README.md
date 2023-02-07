# MEVN Backend and Frontend (MongoDB, Expressjs, Vue and NodeJS)
**Installation**
1. Install Nodejs v16++
2. Install mongodb locally


**Configuration**
1. Enter folder ui
2. (install all dependency in package.json) 
    ```bash 
   npm run install
    ```
3. (generate /dist folder for UI ) 
    ```bash 
   npm run build
    ```
4. Enter folder api
5. (install all dependency in package.json) 
    ```bash 
   npm install
    ```
6. Rename file  _.env-dev_  to _.env_
7. Change MONGO_CONNECTION_STRING with your mongodb connection url
8. (generate /dist folder for UI ) 
    ```bash 
      npm run dev
    ```
9. the application running on port 3080

**Rest Api**

- ```GET /api/articles ``` retrieve all list of article
- ```GET /api/articles/query/:project ``` search article by project
- ```POST /api/article ``` create article
- ```PUT /api/article ``` update article
- ```DELETE /api/article/:id ``` delete article
- ```GET / ``` access Home ui http://localhost:3080/ 