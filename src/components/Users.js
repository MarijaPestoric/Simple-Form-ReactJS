import './Users.css'
const Users = (props) => {
    const usersList = props.userInfo.length > 0 ? props.userInfo.map(el => {
        return  <div className='form'>
        <ul className="user-info" key={el.id}>
                <li id='fname'>{el.firstName}</li>
                <li id='lname'>{el.lastName}</li>
                <li id='street'>{el.street}</li>
                <li id='city'>{el.city}</li>
                <button className='btn remove-btn' onClick={() => props.handleDelete(el.id)}>Remove</button></ul></div>
    }) : "No users available"
    return ( 
        <div className="users">
            {usersList}
        </div>
     );
}

export default Users;