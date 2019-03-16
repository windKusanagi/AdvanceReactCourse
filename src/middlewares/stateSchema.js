export default {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "http://example.com/root.json",
	"type": "object",
	"title": "The Root Schema",
	"required": [
	  "comments",
	  "auth"
	],
	"properties": {
	  "comments": {
		"$id": "#/properties/comments",
		"type": "array",
		"title": "The Comments Schema",
		"items": {
		  "$id": "#/properties/comments/items",
		  "type": "string",
		  "title": "The Items Schema",
		  "default": "",
		  "examples": [
			"Comment 1",
			"Comment 2"
		  ],
		  "pattern": "^(.*)$"
		}
	  },
	  "auth": {
		"$id": "#/properties/auth",
		"type": "object",
		"title": "The Auth Schema",
		"required": [
		  "isLogin"
		],
		"properties": {
		  "isLogin": {
			"$id": "#/properties/auth/properties/isLogin",
			"type": "boolean",
			"title": "The Islogin Schema",
			"default": false,
			"examples": [
			  false
			]
		  }
		}
	  }
	}
  }