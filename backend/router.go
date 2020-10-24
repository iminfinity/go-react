package backend

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Post Struct (Model)
type Post struct {
	Id      string  `json: "id"`
	Title   string  `json: "title"`
	Message string  `json: "message"`
	Author  *Author `json: "author"`
}

// Author Struct
type Author struct {
	FirstName string `json: "firstname"`
	LastName  string `json: "lastname"`
}

// Posts slice
// var Posts []Post

// Posts slice
type Posts struct {
	Posts []Post `json: "posts"`
}

// PostsFromJson posts
var PostsFromJson Posts

// GetPosts - get all posts
func GetPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	json.NewEncoder(w).Encode(PostsFromJson.Posts)
}

// GetPost - get a single post
func GetPost(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r) // Get params

	// Loop through posts find with id
	for _, item := range PostsFromJson.Posts {
		if item.Id == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	errorPost := Post{
		Id:      " ",
		Title:   " ",
		Message: "ID not found",
		Author: &Author{
			FirstName: "Error",
			LastName:  " ",
		},
	}

	json.NewEncoder(w).Encode(errorPost)
}

// CreatePost - create new post
func CreatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	var newPost Post
	_ = json.NewDecoder(r.Body).Decode(&newPost)
	newPost.Id = strconv.Itoa(len(PostsFromJson.Posts) * 2)
	PostsFromJson.Posts = append(PostsFromJson.Posts, newPost)
	json.NewEncoder(w).Encode(PostsFromJson.Posts)
}

// UpdatePost - update a post
func UpdatePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	params := mux.Vars(r)

	for index, item := range PostsFromJson.Posts {
		if item.Id == params["id"] {
			PostsFromJson.Posts = append(PostsFromJson.Posts[:index], PostsFromJson.Posts[index+1:]...)
			var post Post
			_ = json.NewDecoder(r.Body).Decode(&post)
			post.Id = params["id "]
			PostsFromJson.Posts = append(PostsFromJson.Posts, post)
			json.NewEncoder(w).Encode(PostsFromJson.Posts)
			return
		}
	}
	json.NewEncoder(w).Encode(PostsFromJson.Posts)
}

// DeletePost  - delete a post
func DeletePost(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("content-type", "application/json")
	params := mux.Vars(r)

	for index, item := range PostsFromJson.Posts {
		if item.Id == params["id"] {
			PostsFromJson.Posts = append(PostsFromJson.Posts[:index], PostsFromJson.Posts[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(PostsFromJson.Posts)
}
