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
React  
Typescript  
axios  
eslint  
prettier  
bootstrap  
styled-components  
react-router-dom  
react-draggable  
uuid  
craco  

### BE
Express  
Typescript  
eslint  
prettier  
jsonwebtoken  
mongoose  
cross-env  
swagger
