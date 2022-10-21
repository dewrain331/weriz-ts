# 초기 개발 환경 세팅

## 폴더 구조
### FE
front  
 ┣ public  
 ┃ ┗ index.html  
 ┣ src  
 ┃ ┣ assets  
 ┃ ┃ ┗ imgs  
 ┃ ┃ ┃ ┗ LoaderImg.gif  
 ┃ ┣ components  
 ┃ ┃ ┣ header  
 ┃ ┃ ┃ ┣ constant.js  
 ┃ ┃ ┃ ┣ header.style.ts  
 ┃ ┃ ┃ ┗ index.tsx  
 ┃ ┃ ┣ loader  
 ┃ ┃ ┃ ┣ index.tsx  
 ┃ ┃ ┃ ┗ loader.style.ts  
 ┃ ┃ ┣ modal
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ modalPortal.js
 ┃ ┃ ┗ button.js
 ┃ ┣ pages
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ auth.interface.ts
 ┃ ┃ ┃ ┣ auth.style.ts
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┣ loginForm.tsx
 ┃ ┃ ┃ ┗ registerForm.tsx
 ┃ ┃ ┣ canvas
 ┃ ┃ ┃ ┣ canvas.interface.ts
 ┃ ┃ ┃ ┣ canvas.style.ts
 ┃ ┃ ┃ ┣ figureModal.tsx
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┗ main
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ main.style.js
 ┃ ┣ styles
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┗ Theme.js
 ┃ ┣ api.js
 ┃ ┣ App.tsx
 ┃ ┣ index.tsx
 ┃ ┗ react-app-env.d.ts
 ┣ .eslintignore
 ┣ .eslintrc
 ┣ .gitignore
 ┣ .prettierignore
 ┣ .prettierrc
 ┣ craco.config.js
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.json
 ┣ tsconfig.paths.json
 ┗ yarn.lock

### BE
back
 ┣ src
 ┃ ┣ db
 ┃ ┃ ┣ models
 ┃ ┃ ┃ ┗ userModel.ts
 ┃ ┃ ┣ schemas
 ┃ ┃ ┃ ┣ interface.ts
 ┃ ┃ ┃ ┗ user.schema.ts
 ┃ ┃ ┗ index.ts
 ┃ ┣ middlewares
 ┃ ┃ ┣ badRequest.ts
 ┃ ┃ ┣ errorMiddleware.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ loginRequired.ts
 ┃ ┣ routers
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ userRouter.ts
 ┃ ┣ swagger
 ┃ ┃ ┗ index.ts
 ┃ ┣ app.ts
 ┃ ┗ server.ts
 ┣ .eslintignore
 ┣ .eslintrc
 ┣ .gitignore
 ┣ .prettierignore
 ┣ .prettierrc
 ┣ package.json
 ┣ tsconfig.json
 ┗ yarn.lock

## package.json
### FE
"axios": "^0.27.2",<br>
"bootstrap": "^5.2.1",<br>
"react": "^18.2.0",<br>
"react-bootstrap": "^2.5.0",<br>
"react-dom": "^18.2.0",<br>
"react-query": "^3.39.1",<br>
"react-router-dom": "^6.3.0",<br>
"react-scripts": "5.0.1",<br>
"recoil": "^0.7.4",<br>
"styled-components": "^5.3.5",<br>
"eslint-config-prettier": "^8.5.0", <br>
"eslint-plugin-prettier": "^4.2.1", <br>
"prettier": "^2.7.1"

### BE
"axios": "^0.27.2", <br>
"bcrypt": "^5.0.1", <br>
"cors": "^2.8.5", <br>
"express": "^4.18.1", <br>
"mongoose": "^6.4.2", <br>
"@babel/cli": "^7.17.10", <br>
"@babel/core": "^7.18.2", <br>
"@babel/node": "^7.17.10", <br>
"@babel/plugin-transform-runtime": "^7.18.2", <br>
"@babel/preset-env": "^7.18.2", <br>
"cross-env": "^7.0.3", <br>
"dotenv": "^16.0.1", <br>
"eslint-config-prettier": "^8.5.0", <br>
"eslint-plugin-prettier": "^4.2.1", <br>
"jest": "^28.1.2", <br>
"joi": "^17.6.0", <br>
"joi-password": "^3.0.1", <br>
"nodemon": "^2.0.18", <br>
"path": "^0.12.7", <br>
"prettier": "^2.7.1", <br>
"swagger-jsdoc": "^6.2.1", <br>
"swagger-ui-express": "^4.4.0" <br>
