# PatientManV1
write end points in nodejs

## Features

- Helps you establish CRUD and also to write SubRoutes and insert EndPoints of your wish.

## Usage

1. Open an Empty Folder.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Search for and run (`GenerateWMail FrontAndBack NonSecured`).
4. Find the available options there ( like `GenerateWMail FrontAndBack`, `GenerateWMail OnlyBackEnd`).
5. All the Folders and Files are copied to your empty Folder.
6. .env file the place where you define ( Data Path and Port Number ).
7. app.js is entry file.
8. on successfull completion, node will automatically run at port number in .env file

## project-root/ 

├── app.js 
├── .env 
├── V1/ 
│ └── yourRoutes.js 
├──SV1/
│ └── yoursecureRoutes.js 
├── Token/ 
├── Schemas/ 
│ └── yourSchmea.json
├── Data/ 
| └── db.json
├──schema.json
└── public

## Release Notes

### 1.2.1

- DoctorsTable added

## License

MIT
