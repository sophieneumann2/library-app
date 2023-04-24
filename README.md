# Getting started

## 01. Generate SSL certificate

- Please follow these
  instructions: https://github.com/darbyluv2code/fullstack-react-and-springboot/blob/main/bonus-content/openssl-setup.md

## 02. Create .env

- create your .env file in the root directory
- the .env file should include:
    - SSL_CRT_FILE=ssl-localhost/localhost.crt
    - SSL_KEY_FILE=ssl-localhost/localhost.key
    - REACT_APP_API='https://localhost:YOUR_SERVER_PORT/api'
- Note: Please replace YOUR_SERVER_PORT with your server port ;)
