# [<img src=https://i.ibb.co/MNjXD05/go-react.png>](https://go-react-rest.herokuapp.com/)
## This README has nothing to do with rest api in this repo, its just for future reference
## Learning to use go and react together
### Before starting please make sure all of the following is installed

    go
    node
    yarn 
    heroku cli
    git

## Initialize go

    cd ~/go/src/github.com/your-github-username 

## Create a folder

    mkdir go-react
    cd go-react

## Create react front-end

    mkdir frontend
    cd frontend
    npx create-react-app ./
    yarn build

## Create go file- main.go or anything.go i prefer server.go

    cd ..
    echo . > server.go 
    code server.go 

### Edit server.go

    package main
    import (
    "fmt"
    "net/http"
    "os"
    )
    func main() {
        port := os.Getenv("PORT") //for production, for development port := any free port eg: 8000
        http.Handle("/", http.FileServer(http.Dir("./frontend/build/")))
        fmt.Println("Server running at port " + port)
        http.ListenAndServe(":"+port, nil)
    }

## Open command prompt in the go workspace where server.go is located

    go mod init
    go mod vendor

## Login to heroku

    heroku login
    heroku create your-app-name

## Initialize git

    git init
    git add .
    git commit -m "heroku init"
    git push heroku master

## Check

    heroku open

# Now enjoy
