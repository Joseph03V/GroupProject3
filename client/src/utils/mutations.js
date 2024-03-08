import {gql} from '@apollo/client'

export const CREATE_POST = gql`
    mutation createPost($username:String!,$createdAt:String!,postImage:Image,$postText:String!) {
        createPost(username:$username,createdAt:$createdAt,postImage:postImage,postText:$postText) {
            _id
            username
            createdAt
            postImage
            postText
        }
    }
`

export const CREATE_USER = gql`
    mutation createUser($username:String!,pets:String) {
        createUser(username:$username,pets:$pets) {
            _id
            username
            pets
        }
    }
`

export const CREATE_REACTION = gql`
    mutation createReaction($username:String!,$createdAt:Date!,$reactionBody:String!) {
        createReaction(username:$username,createdAt:$createdAt,reactionBody:$reactionBody) {
            _id
            username
            createdAt
            reactionBody
        }
    }
`

export const ADD_FRIEND = gql`
    mutation addFriend($username:String!,$friends:String!) {
        addFriend(username:$username,friends:$friends) {
            _id
            username
            friend
        }
    }
`

export const ADD_PET = gql`
    mutation addPet($username:String!,pets:String!) {
        addFriend(username:$username,pets:$pets!) {
            _id
            username
            pets
        }
    }
`