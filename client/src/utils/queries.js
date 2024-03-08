import {gql} from '@apollo/client'

export const QUERY_POSTS = gql`
    query posts {
        posts {
            _id
            username
            createdAt
            postImage
            postText
            reactions
    }
}
`

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            posts
            pets
            friends
        }
    }

`

export const QUERY_REACTIONS = gql`
    query reactions {
        reactions {
            _id
            username
            createdAt
            reactionBody
        }
    }
`

export const QUERY_PETS = gql`
    query pets {
        pets {
            _id
            name
            breed
            gender
        }
    }
`

export const QUERY_FRIENDS = gql`
    query friends {
        friends {
            _id
            username
        }
    }
`