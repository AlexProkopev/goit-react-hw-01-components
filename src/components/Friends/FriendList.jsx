import FriendListItem from "components/FrendListItem/FriendListItem"



export default function FriendList({ friends }) {
    return (
        <ul style={{listStyle:"none", display:"flex", gap:"40px", justifyContent:"center"}}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            })}
        </ul>
    )
}